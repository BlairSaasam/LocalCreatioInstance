namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: SaaSamRetrieveDataFromAgiloft

	[DesignModeProperty(Name = "SaaSamAgiloftRecordId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "b5a6d447135249babac9b25d57712d4d", CaptionResourceItem = "Parameters.SaaSamAgiloftRecordId.Caption", DescriptionResourceItem = "Parameters.SaaSamAgiloftRecordId.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "SaaSamExternalDataSourceId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "b5a6d447135249babac9b25d57712d4d", CaptionResourceItem = "Parameters.SaaSamExternalDataSourceId.Caption", DescriptionResourceItem = "Parameters.SaaSamExternalDataSourceId.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "SaaSamExternalSystemId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "b5a6d447135249babac9b25d57712d4d", CaptionResourceItem = "Parameters.SaaSamExternalSystemId.Caption", DescriptionResourceItem = "Parameters.SaaSamExternalSystemId.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "SaaSamRecordId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "b5a6d447135249babac9b25d57712d4d", CaptionResourceItem = "Parameters.SaaSamRecordId.Caption", DescriptionResourceItem = "Parameters.SaaSamRecordId.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "SaaSamTable", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "b5a6d447135249babac9b25d57712d4d", CaptionResourceItem = "Parameters.SaaSamTable.Caption", DescriptionResourceItem = "Parameters.SaaSamTable.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class SaaSamRetrieveDataFromAgiloft : ProcessUserTask
	{

		#region Constructors: Public

		public SaaSamRetrieveDataFromAgiloft(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("b5a6d447-1352-49ba-bac9-b25d57712d4d");
		}

		#endregion

		#region Properties: Public

		public virtual string SaaSamAgiloftRecordId {
			get;
			set;
		}

		public virtual string SaaSamExternalDataSourceId {
			get;
			set;
		}

		public virtual string SaaSamExternalSystemId {
			get;
			set;
		}

		public virtual string SaaSamRecordId {
			get;
			set;
		}

		public virtual string SaaSamTable {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		public override void WritePropertiesData(DataWriter writer) {
			writer.WriteStartObject(Name);
			base.WritePropertiesData(writer);
			if (Status == Core.Process.ProcessStatus.Inactive) {
				writer.WriteFinishObject();
				return;
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("SaaSamAgiloftRecordId")) {
					writer.WriteValue("SaaSamAgiloftRecordId", SaaSamAgiloftRecordId, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("SaaSamExternalDataSourceId")) {
					writer.WriteValue("SaaSamExternalDataSourceId", SaaSamExternalDataSourceId, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("SaaSamExternalSystemId")) {
					writer.WriteValue("SaaSamExternalSystemId", SaaSamExternalSystemId, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("SaaSamRecordId")) {
					writer.WriteValue("SaaSamRecordId", SaaSamRecordId, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("SaaSamTable")) {
					writer.WriteValue("SaaSamTable", SaaSamTable, null);
				}
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "SaaSamAgiloftRecordId":
					if (!UseFlowEngineMode) {
						break;
					}
					SaaSamAgiloftRecordId = reader.GetStringValue();
				break;
				case "SaaSamExternalDataSourceId":
					if (!UseFlowEngineMode) {
						break;
					}
					SaaSamExternalDataSourceId = reader.GetStringValue();
				break;
				case "SaaSamExternalSystemId":
					if (!UseFlowEngineMode) {
						break;
					}
					SaaSamExternalSystemId = reader.GetStringValue();
				break;
				case "SaaSamRecordId":
					if (!UseFlowEngineMode) {
						break;
					}
					SaaSamRecordId = reader.GetStringValue();
				break;
				case "SaaSamTable":
					if (!UseFlowEngineMode) {
						break;
					}
					SaaSamTable = reader.GetStringValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

