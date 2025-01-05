namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Core.Entities;
    using Terrasoft.Web.Common;
    using System;
    using System.Web;
    using System.Web.SessionState;
    using System.Data;
    using System.Collections.Generic;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using System.Net;
    using System.IO;
    using System.Text;
    using System.Text.Json;
    using System.Linq;
    using Terrasoft.Configuration.Copilot;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class SaaSamSendToAgiloft : BaseService
    {

        private HttpWebRequest CreateRequest(string url, string requestData = null)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.ContentType = "application/json";
            request.Method = "POST";
            request.KeepAlive = true;
            if (!string.IsNullOrEmpty(requestData))
            {
                using (var requestStream = request.GetRequestStream())
                {
                    using (var writer = new StreamWriter(requestStream))
                    {
                        writer.Write(requestData);
                    }
                }
            }
            return request;
        }

        public string buildAgiloftHotlink(Dictionary<string, FieldObject> objDict)
        {

            string fields = "";
            foreach (KeyValuePair<string, FieldObject> entry in objDict)
            {
                if (entry.Value.FieldValue != ""){
                    if (entry.Value.RequiresSpecialFormatting == true)
                    {
                        fields += "&" + entry.Value.ExternalFieldName + "=:" + WebUtility.UrlEncode(entry.Value.FieldValue);
                    }
                    else
                    {
                        fields += "&" + entry.Value.ExternalFieldName + "=" + WebUtility.UrlEncode(entry.Value.FieldValue);
                    }
                }
            }
            string table = "&$table=" + objDict.First().Value.ExternalFieldDataSource;

            var genHotlink = "$genhotlink=" + WebUtility.UrlEncode(Terrasoft.Core.Configuration.SysSettings.GetValue<string>(UserConnection, "SaaSamGenHotlink", ""));
            var genProject = "&$genproject=" + WebUtility.UrlEncode(Terrasoft.Core.Configuration.SysSettings.GetValue<string>(UserConnection, "SaaSamGenProject", ""));
            var agiloftUrl = Terrasoft.Core.Configuration.SysSettings.GetValue<string>(UserConnection, "SaaSamAgiloftUrl", "");

            string requestLink = "";
            
            if (objDict["SaaSamAgiloftId"].FieldValue != "")
            {
                requestLink = agiloftUrl + "/ewws/EWUpdate/.json?" + genHotlink + genProject + table + fields + "&id=" + objDict["SaaSamAgiloftId"].FieldValue;
            }
            else
            {
                requestLink = agiloftUrl + "/ewws/EWCreate/.json?" + genHotlink + genProject + table + fields;
            }

            return requestLink;
        }



        public string sendContractRequestToAgiloft(string recordId, string table, string externalSystemId, string externalDataSourceId)
        {
            DBExecutor dbExecutor = UserConnection.EnsureDBConnection();
            var SglHelp = new SaasamCommonFunctions();

            //Select select = SglHelp.selectFromList(fieldArr, table, recordId);

            Dictionary<string, FieldObject> tempdict = SglHelp.selectToMappedObjDict(externalSystemId, externalDataSourceId, table, recordId);


            var request = CreateRequest(buildAgiloftHotlink(tempdict));
            string responseMessage = "";

            using (var response = (HttpWebResponse)request.GetResponse())
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    using (var reader = new StreamReader(response.GetResponseStream()))
                    {
                        responseMessage = reader.ReadToEnd();

                        string id = System.Text.Json.JsonDocument.Parse(responseMessage).RootElement.GetProperty("result").ToString();

                        responseMessage = id;
                        Console.WriteLine(responseMessage);
                    }
                }
            }

            return responseMessage;

            //if (fieldDict["SaaSamAgiloftId"] != "")
            //{
            //    return fieldDict["SaaSamAgiloftId"];
            //}
            //else
            //{
            //    return responseMessage;
            //}


            //Dictionary<string, string> fieldDict = SglHelp.selectToStringDict(select);

            //return ("Id: " + tempdict["Id"].FieldValue + ", " +
            //        "Number: " + tempdict["Number"].FieldValue + ", " +
            //        "Amount: " + tempdict["Amount"].FieldValue + ", " +
            //        "Start Date: " + tempdict["StartDate"].FieldValue + ", " +
            //        "End Date: " + tempdict["EndDate"].FieldValue
            //        );

        }
    }
}