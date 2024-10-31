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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,219,106,219,64,16,125,15,228,31,6,209,7,9,204,146,188,214,109,160,54,110,9,132,182,216,114,94,74,31,214,171,177,178,101,47,98,103,229,212,45,253,247,142,118,125,81,115,129,10,161,203,204,153,51,231,204,14,56,105,145,58,169,16,106,12,65,146,223,70,49,247,110,171,219,62,200,168,189,187,188,248,125,121,1,0,61,105,215,194,106,79,17,237,116,20,25,151,89,235,221,107,185,128,98,225,162,142,26,233,63,32,98,177,67,23,51,50,161,191,165,204,62,133,239,52,139,112,24,202,149,122,64,43,63,179,5,120,15,197,154,194,18,165,137,251,162,250,158,106,186,126,99,180,2,101,36,17,228,212,11,44,240,22,102,146,240,133,76,34,201,238,79,100,126,199,130,117,131,176,243,186,129,47,110,37,119,108,163,244,155,31,168,34,16,186,6,195,4,50,217,12,183,236,41,81,126,8,45,1,86,7,174,35,39,192,134,59,139,19,203,177,28,171,233,9,145,169,32,36,249,108,179,204,129,42,99,207,184,6,149,182,210,64,23,180,26,198,145,11,196,39,140,245,190,195,102,238,77,111,221,189,52,61,190,59,64,111,202,97,100,95,7,252,98,189,44,70,61,245,22,202,204,115,3,215,87,199,171,58,229,207,250,1,80,220,210,92,58,133,6,27,110,27,67,143,211,81,154,98,24,142,153,151,140,100,139,53,218,206,200,56,232,115,248,8,119,94,73,163,127,201,141,193,85,194,149,7,213,107,194,192,91,232,120,166,188,130,98,137,228,251,160,24,228,3,179,76,96,116,216,121,81,138,9,20,207,216,72,36,191,183,84,123,63,211,109,254,43,42,81,251,67,183,234,117,165,172,48,7,196,71,31,172,140,229,19,7,220,239,90,92,205,222,20,255,112,196,135,224,31,147,181,197,79,133,221,32,254,88,120,198,253,201,31,233,197,15,190,255,2,163,156,7,210,134,3,0,0 };
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

