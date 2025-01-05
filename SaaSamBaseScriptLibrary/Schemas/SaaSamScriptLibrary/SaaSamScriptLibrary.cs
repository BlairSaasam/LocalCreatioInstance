  namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Core.Entities;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;
    using System.Data;
    using System.Collections.Generic;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using System.Net;
    using System.IO;
    using System.Text;
    using Terrasoft.Configuration.RightsService;
    using System.Web.UI.WebControls;


    public class FieldObject
    {
        private string fieldValue;
        private string externalFieldName;
        private string externalFieldDataSource;
        private string creatioLookupObject;
        private string creatoLookupFieldCode;
        private string creatoLookupFieldValue;
        private bool requiresSpecialFormatting;


        public string FieldValue
        {
            get => fieldValue;
            set => fieldValue = value;
        }
        public string ExternalFieldName
        {
            get => externalFieldName;
            set => externalFieldName = value;
        }
        public string ExternalFieldDataSource
        {
            get => externalFieldDataSource;
            set => externalFieldDataSource = value;
        }
        public bool RequiresSpecialFormatting
        { 
            get => requiresSpecialFormatting;
            set => requiresSpecialFormatting = value;
        }
    }

    public class SaasamCommonFunctions : BaseService
    {   

        public Dictionary<string, FieldObject> selectToMappedObjDict(string externalSystemDataSourceId, string ExternalSystemNameId, string sourceTable, string recordId)
        {

            //Select to grab all mapping table data that matches external system name and data source
            Select mappedSelect = new Select(UserConnection)
            .Column("SaaSamCreatioFieldCode")
            .Column("SaaSamExternalFieldCode")
            .Column("SaaSamExternalSystemDataSourceId")
            .Column("SaaSamCreatioLookupObjectId")
            .Column("SaaSamCreatioLookupFieldCode")
            .Column("SaaSamRequiresSpecialFormatting")
            .From("SaaSamMappingTable")
            .Where("SaaSamExternalSystemDataSourceId").IsEqual(Column.Parameter(new Guid(externalSystemDataSourceId)))
            .And("SaaSamExternalSystemNameId").IsEqual(Column.Parameter(new Guid(ExternalSystemNameId)))
            as Select;

            //Normalize mapping table data into a dictionary of dictionary of strings. Parent dictionary key is the creatio field that we are mapping.
            //Child dictionary key is the remaining fields code. Value is field value

            string fieldValue = "";
            string tmpStr = "";
            List<string> tempStrList = new List<string>();
            Dictionary<string, Dictionary<string, string>> mappingDict = new Dictionary<string, Dictionary<string, string>>();

            using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection())
            {
                using (IDataReader reader = mappedSelect.ExecuteReader(dbExecutor))
                {
                    while (reader.Read())
                    {
                        for (int i = 0; i < reader.FieldCount; i++)
                        {
                            tmpStr += reader.GetName(i) + " : " + String.Format("{0}", reader[i]) + ", ";
                            if (reader.GetName(i) == "SaaSamCreatioFieldCode" && String.Format("{0}", reader[i]) != "")
                            {
                                Dictionary<string, string> fieldDict1 = new Dictionary<string, string>();
                                fieldValue = String.Format("{0}", reader[i]);
                                mappingDict.Add(fieldValue, fieldDict1);
                                tempStrList.Add(fieldValue);
                            }
                            else if(reader.GetName(i) == "SaaSamExternalSystemDataSourceId" && String.Format("{0}", reader[i]) != "")
                            {
                                Select selectDataSourceID = new Select(UserConnection)
                                .Column("Name")
                                .From("SaaSamExternalSystemDataSource")
                                .Where("Id").IsEqual(Column.Parameter(new Guid(String.Format("{0}", reader[i]))))
                                as Select;
                                string result = selectDataSourceID.ExecuteScalar<string>();
                                mappingDict[fieldValue].Add(reader.GetName(i), result);
                            }
                            else if (reader.GetName(i) == "SaaSamCreatioLookupObjectId")
                            {
                                if (String.Format("{0}", reader[i]) != "")
                                {
                                    Select selectCreatioLookupID = new Select(UserConnection)
                                    .Column("SaaSamCreatioObjectCode")
                                    .From("SaaSamAvailableCreatioTables")
                                    .Where("Id").IsEqual(Column.Parameter(new Guid(String.Format("{0}", reader[i]))))
                                    as Select;
                                    string result = selectCreatioLookupID.ExecuteScalar<string>();
                                    mappingDict[fieldValue].Add(reader.GetName(i), result);
                                }
                                else
                                {
                                    mappingDict[fieldValue].Add(reader.GetName(i), "N/A");
                                }

                            }
                            else if (String.Format("{0}", reader[i]) != "")
                            {
                                mappingDict[fieldValue].Add(reader.GetName(i), String.Format("{0}", reader[i]));
                            }
                        }
                    }
                    reader.Close();
                }
            }

            //Create a dictionary of FieldObjects
            Dictionary<string, FieldObject> fieldDict = new Dictionary<string, FieldObject>();

            Select select = selectFromList(tempStrList, sourceTable, recordId);


            //Looping over select statement to grab selected field values and match them with mapping values into a dictionary of objects
            using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection())
            {
                using (IDataReader reader = select.ExecuteReader(dbExecutor))
                {
                    while (reader.Read())
                    {
                        for (int i = 0; i < reader.FieldCount; i++)
                        {
                            //Creating object and setting values based on normalized mapping dictionary values
                            FieldObject fieldObject = new FieldObject();
                            string tmpString = reader.GetName(i);
                            if (mappingDict[reader.GetName(i)]["SaaSamCreatioLookupObjectId"] != "N/A")
                            {
                                Select selectCreatioLookupFieldValue = new Select(UserConnection)
                                .Column(mappingDict[reader.GetName(i)]["SaaSamCreatioLookupFieldCode"])
                                .From(mappingDict[reader.GetName(i)]["SaaSamCreatioLookupObjectId"])
                                .Where("Id").IsEqual(Column.Parameter(new Guid(String.Format("{0}", reader[i]))))
                                as Select;
                                string result = selectCreatioLookupFieldValue.ExecuteScalar<string>();
                                fieldObject.FieldValue = result;
                            }
                            else
                            {
                                fieldObject.FieldValue = String.Format("{0}", reader[i]);
                            }
                            fieldObject.ExternalFieldName = mappingDict[reader.GetName(i)]["SaaSamExternalFieldCode"];
                            fieldObject.ExternalFieldDataSource = mappingDict[reader.GetName(i)]["SaaSamExternalSystemDataSourceId"];
                            fieldObject.RequiresSpecialFormatting = Convert.ToBoolean(mappingDict[reader.GetName(i)]["SaaSamRequiresSpecialFormatting"]);
                            fieldDict.Add(reader.GetName(i), fieldObject);
                        }
                    }
                    reader.Close();
                }
            }

            return fieldDict;
        }

        public Dictionary<string, string> selectToStringDict(Select select)
        {
            Dictionary<string, string> fieldDict = new Dictionary<string, string>();
            using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection())
            {
                using (IDataReader reader = select.ExecuteReader(dbExecutor))
                {
                  while (reader.Read())
                  {
                      for (int i = 0; i < reader.FieldCount; i++)
                      {
                          fieldDict.Add(reader.GetName(i), String.Format("{0}", reader[i]));
                      }
                  }
                   reader.Close();
                }
            }
            return fieldDict;
        }

        public Select selectFromList (List<string> fieldList, String table, string recordId)
        {
            Select select = new Select(UserConnection)
            .From(table)
            .Where("Id").IsEqual(Column.Parameter(new Guid(recordId)))
            as Select;

            for (int i = 0; i < fieldList.Count; i++)
            {
                select.Column(fieldList[i]);
            }

            return select;
        }

    }
}