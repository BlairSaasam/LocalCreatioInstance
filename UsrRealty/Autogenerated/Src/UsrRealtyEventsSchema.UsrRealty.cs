namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("08b8b1cf-4a77-47ea-bf03-ae6036bffd50");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("07d01d0e-7a4a-4d28-991f-a5714700a4a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,7,242,31,6,145,131,4,102,73,174,117,27,168,141,91,18,66,19,108,185,151,210,195,122,53,86,182,172,118,197,206,202,137,91,250,223,59,218,149,109,165,77,160,66,232,99,230,189,55,111,102,7,172,108,144,90,169,16,74,244,94,146,219,6,49,119,118,171,235,206,203,160,157,61,63,251,117,126,6,0,29,105,91,195,106,79,1,155,233,40,50,166,53,141,179,111,229,60,138,133,13,58,104,164,255,128,136,197,14,109,120,129,76,165,69,137,207,65,220,210,80,40,230,191,69,214,62,82,238,52,163,44,250,124,165,30,177,145,95,184,61,248,0,217,154,252,18,165,9,251,172,248,30,57,109,183,49,90,129,50,146,8,82,234,21,21,120,7,51,73,248,74,38,138,164,201,28,197,220,142,155,209,21,194,206,233,10,238,237,74,238,216,120,238,54,63,80,5,32,180,21,250,9,36,177,25,110,185,223,40,249,209,215,4,88,12,90,7,77,128,13,87,22,71,149,3,29,139,233,17,145,164,192,71,251,220,102,158,2,69,194,158,112,21,42,221,72,3,173,215,170,31,71,34,136,207,24,202,125,139,213,220,153,174,177,95,165,233,240,253,0,189,206,251,145,61,244,248,197,122,153,141,106,234,45,228,73,231,26,174,46,15,87,113,204,159,252,3,160,184,161,185,180,10,13,86,92,54,248,14,167,163,52,5,223,31,44,47,32,201,26,75,108,90,35,67,239,207,226,19,220,57,37,141,254,41,55,6,87,17,151,15,174,215,132,158,55,212,242,76,121,61,197,18,201,117,94,49,200,121,86,153,192,232,176,211,18,101,19,200,254,81,35,17,251,189,161,210,185,153,174,211,95,86,136,210,13,213,138,183,157,178,195,20,16,159,156,111,100,200,255,234,128,235,93,137,203,217,69,246,66,35,60,122,247,20,91,91,60,43,108,123,243,7,226,9,247,59,125,196,23,63,248,254,3,41,216,85,80,162,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("5aa5c4e1-d667-cf45-ddb3-dc4b821f2d3b"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("07d01d0e-7a4a-4d28-991f-a5714700a4a2"),
				CreatedInSchemaUId = new Guid("08b8b1cf-4a77-47ea-bf03-ae6036bffd50"),
				ModifiedInSchemaUId = new Guid("08b8b1cf-4a77-47ea-bf03-ae6036bffd50")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("08b8b1cf-4a77-47ea-bf03-ae6036bffd50"));
		}

		#endregion

	}

	#endregion

}

