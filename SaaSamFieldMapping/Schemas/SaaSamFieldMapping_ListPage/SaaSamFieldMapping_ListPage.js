define("SaaSamFieldMapping_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SaaSamMappingTable"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Tag_Virtual_Schema",
						"defaultValue": null,
						"recordsFilter": null
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "SaaSamMappingTable"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "bee09047-1416-c61a-8ba7-4e1933b6898d",
							"code": "PDS_SaaSamCreatioFieldCode",
							"caption": "#ResourceString(PDS_SaaSamCreatioFieldCode)#",
							"dataValueType": 27,
							"width": 178
						},
						{
							"id": "5d6ae4a7-92ec-bddf-26c5-9cfd5820e7c6",
							"code": "PDS_SaaSamCreatioObject",
							"caption": "#ResourceString(PDS_SaaSamCreatioObject)#",
							"dataValueType": 10,
							"width": 149
						},
						{
							"id": "63490dc2-28db-d43d-5778-5d60c0148ca5",
							"code": "PDS_SaaSamCreatioLookupFieldCode",
							"caption": "#ResourceString(PDS_SaaSamCreatioLookupFieldCode)#",
							"dataValueType": 28,
							"width": 219
						},
						{
							"id": "104f2e9d-37b2-b94d-cee3-f6633e6baff1",
							"code": "PDS_SaaSamCreatioLookupObject",
							"caption": "#ResourceString(PDS_SaaSamCreatioLookupObject)#",
							"dataValueType": 10,
							"width": 193
						},
						{
							"id": "5e0a21d9-79f0-a606-df30-b4f23bc5822a",
							"code": "PDS_SaaSamExternalFieldCode",
							"caption": "#ResourceString(PDS_SaaSamExternalFieldCode)#",
							"dataValueType": 27,
							"width": 174
						},
						{
							"id": "0501fed5-bd96-61f0-305e-c8e2642651fc",
							"code": "PDS_SaaSamExternalSystemDataSource",
							"caption": "#ResourceString(PDS_SaaSamExternalSystemDataSource)#",
							"dataValueType": 10,
							"width": 234
						},
						{
							"id": "175e4ea7-8ebe-2694-8efa-2ad1c25adbd0",
							"code": "PDS_SaaSamExternalSystemName",
							"caption": "#ResourceString(PDS_SaaSamExternalSystemName)#",
							"dataValueType": 10
						},
						{
							"id": "ab7641cf-cb28-3d08-cf50-a40f98b52de5",
							"code": "PDS_SaaSamRequiresSpecialFormatting",
							"caption": "#ResourceString(PDS_SaaSamRequiresSpecialFormatting)#",
							"dataValueType": 12
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_SaaSamCreatioFieldCode": {
						"modelConfig": {
							"path": "PDS.SaaSamCreatioFieldCode"
						}
					},
					"PDS_SaaSamCreatioObject": {
						"modelConfig": {
							"path": "PDS.SaaSamCreatioObject"
						}
					},
					"PDS_SaaSamCreatioLookupFieldCode": {
						"modelConfig": {
							"path": "PDS.SaaSamCreatioLookupFieldCode"
						}
					},
					"PDS_SaaSamCreatioLookupObject": {
						"modelConfig": {
							"path": "PDS.SaaSamCreatioLookupObject"
						}
					},
					"PDS_SaaSamExternalFieldCode": {
						"modelConfig": {
							"path": "PDS.SaaSamExternalFieldCode"
						}
					},
					"PDS_SaaSamExternalSystemDataSource": {
						"modelConfig": {
							"path": "PDS.SaaSamExternalSystemDataSource"
						}
					},
					"PDS_SaaSamExternalSystemName": {
						"modelConfig": {
							"path": "PDS.SaaSamExternalSystemName"
						}
					},
					"PDS_SaaSamRequiresSpecialFormatting": {
						"modelConfig": {
							"path": "PDS.SaaSamRequiresSpecialFormatting"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "SaaSamCreatioLookupFieldCode"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "SaaSamMappingTable",
					"attributes": {
						"SaaSamCreatioFieldCode": {
							"path": "SaaSamCreatioFieldCode"
						},
						"SaaSamCreatioObject": {
							"path": "SaaSamCreatioObject"
						},
						"SaaSamCreatioLookupFieldCode": {
							"path": "SaaSamCreatioLookupFieldCode"
						},
						"SaaSamCreatioLookupObject": {
							"path": "SaaSamCreatioLookupObject"
						},
						"SaaSamExternalFieldCode": {
							"path": "SaaSamExternalFieldCode"
						},
						"SaaSamExternalSystemDataSource": {
							"path": "SaaSamExternalSystemDataSource"
						},
						"SaaSamExternalSystemName": {
							"path": "SaaSamExternalSystemName"
						},
						"SaaSamRequiresSpecialFormatting": {
							"path": "SaaSamRequiresSpecialFormatting"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});