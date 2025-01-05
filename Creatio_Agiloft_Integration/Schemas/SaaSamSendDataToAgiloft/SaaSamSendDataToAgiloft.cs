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
using System.Collections.ObjectModel;
using System.Globalization;
using Terrasoft.Core.Configuration;
using Terrasoft.Core.Process;
using Terrasoft.Configuration;


namespace Terrasoft.Core.Process.Configuration
{

	#region Class: SaaSamSendDataToAgiloft

	/// <exclude/>
	public partial class SaaSamSendDataToAgiloft
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
         SaaSamAgiloftRecordId = sendDataToAgiloft(SaaSamRecordId, SaaSamTable, SaaSamExternalDataSourceId, SaaSamExternalSystemId);
			return true;
		}

		#endregion

		#region Methods: Public

		public override string GetExecutionData() {
			return string.Empty;
		}

        #endregion


      //This function calls upon other helper functions to grab field values, create a dictionary, and build a link to send to agiloft
        private string sendDataToAgiloft(string recordId, string table, string externalSystemId, string externalDataSourceId)
        {
          //Creates a new instance of saasam script library
            var SglHelp = new SaasamCommonFunctions(); 

          //Using the script library, creates a Dictionary of FieldObjects which uses the Creatio field code as a key. Field object parameters are mapped using the mapping table
            Dictionary<string, FieldObject> tempdict = SglHelp.selectToMappedObjDict(externalSystemId, externalDataSourceId, table, recordId);

          //Builds an agiloft link using the generated dictionary, then using that builds a web request
            var request = CreateRequest(buildAgiloftHotlink(tempdict));
          
            string responseMessage = "";

          //Sends the request to Agiloft and returns the created/updated record ID
            using (var response = (HttpWebResponse)request.GetResponse())
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    using (var reader = new StreamReader(response.GetResponseStream()))
                    {
                        responseMessage = reader.ReadToEnd();

                        try
                        {
                            //Getting the ID from the returned JSON from Agiloft
                            string id = System.Text.Json.JsonDocument.Parse(responseMessage).RootElement.GetProperty("result").ToString();

                            responseMessage = id;
                            Console.WriteLine(responseMessage);
                        }
                        catch 
                        {
                            throw new Exception(System.Text.Json.JsonDocument.Parse(responseMessage).RootElement.GetProperty("errors").ToString());
                        }
                    }
                }
            }
            return responseMessage;
        }

      
        private string buildAgiloftHotlink(Dictionary<string, FieldObject> objDict)
        {

            string fields = "";
            foreach (KeyValuePair<string, FieldObject> entry in objDict)
            {
                if (entry.Value.FieldValue != "")
                {
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

            SaaSamTestStr = requestLink;
            return requestLink;
        }


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

    }
	#endregion
}

