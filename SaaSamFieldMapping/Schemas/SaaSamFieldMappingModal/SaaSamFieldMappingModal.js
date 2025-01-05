define("SaaSamFieldMappingModal", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "FlexContainer_iia7gwv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_kmtl3h8",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SaaSamMappingTableDS_SaaSamCreatioObject_1u8udp0",
					"labelPosition": "above",
					"control": "$SaaSamMappingTableDS_SaaSamCreatioObject_1u8udp0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "FlexContainer_iia7gwv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_mkq4fgg",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SaaSamMappingTableDS_SaaSamCreatioFieldCode_hy8x71b",
					"labelPosition": "above",
					"control": "$SaaSamMappingTableDS_SaaSamCreatioFieldCode_hy8x71b"
				},
				"parentName": "FlexContainer_iia7gwv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_lru1bq3",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.SaaSamMappingTableDS_SaaSamActive_tcbswnx",
					"labelPosition": "above",
					"control": "$SaaSamMappingTableDS_SaaSamActive_tcbswnx"
				},
				"parentName": "FlexContainer_iia7gwv",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_lookups",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": false,
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_iia7gwv",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_2czezab",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SaaSamMappingTableDS_SaaSamCreatioLookupObject_igo9h9k",
					"labelPosition": "above",
					"control": "$SaaSamMappingTableDS_SaaSamCreatioLookupObject_igo9h9k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lookups",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_uukbbnx",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_uukbbnx_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2czezab",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_o03lsz4",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SaaSamMappingTableDS_SaaSamCreatioLookupFieldCode_0i62egn",
					"labelPosition": "above",
					"control": "$SaaSamMappingTableDS_SaaSamCreatioLookupFieldCode_0i62egn",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lookups",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_shvsvnu",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SaaSamMappingTableDS_SaaSamExternalSystemName_mue52yr",
					"labelPosition": "above",
					"control": "$SaaSamMappingTableDS_SaaSamExternalSystemName_mue52yr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "FlexContainer_iia7gwv",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_gdkr7gq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gdkr7gq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_shvsvnu",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_5r71pqb",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SaaSamMappingTableDS_SaaSamExternalSystemDataSource_4173fx8",
					"labelPosition": "above",
					"control": "$SaaSamMappingTableDS_SaaSamExternalSystemDataSource_4173fx8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "FlexContainer_iia7gwv",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ListAction_lbxd4ot",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "ComboBox.AddNewRecord",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5r71pqb",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_71lz55s",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SaaSamMappingTableDS_SaaSamExternalFieldCode_do5r4xr",
					"labelPosition": "above",
					"control": "$SaaSamMappingTableDS_SaaSamExternalFieldCode_do5r4xr"
				},
				"parentName": "FlexContainer_iia7gwv",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Checkbox_pr4x8wf",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.SaaSamMappingTableDS_SaaSamRequiresSpecialFormatting_4932amz",
					"labelPosition": "above",
					"control": "$SaaSamMappingTableDS_SaaSamRequiresSpecialFormatting_4932amz"
				},
				"parentName": "FlexContainer_iia7gwv",
				"propertyName": "items",
				"index": 7
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"SaaSamMappingTableDS_SaaSamCreatioFieldCode_hy8x71b": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamCreatioFieldCode"
						}
					},
					"SaaSamMappingTableDS_SaaSamExternalFieldCode_do5r4xr": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamExternalFieldCode"
						}
					},
					"SaaSamMappingTableDS_SaaSamCreatioObject_1u8udp0": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamCreatioObject"
						}
					},
					"SaaSamMappingTableDS_SaaSamExternalSystemName_mue52yr": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamExternalSystemName"
						}
					},
					"SaaSamMappingTableDS_SaaSamExternalSystemDataSource_4173fx8": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamExternalSystemDataSource"
						}
					},
					"SaaSamMappingTableDS_SaaSamActive_ct9hg2o": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamIsLookup"
						}
					},
					"SaaSamMappingTableDS_SaaSamRequiresSpecialFormatting_4932amz": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamRequiresSpecialFormatting"
						}
					},
					"SaaSamMappingTableDS_SaaSamCreatioLookupObject_igo9h9k": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamCreatioLookupObject"
						}
					},
					"SaaSamMappingTableDS_SaaSamActive_tcbswnx": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamIsLookup"
						}
					},
					"SaaSamMappingTableDS_SaaSamCreatioLookupFieldCode_az0dfwc": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamCreatioLookupFieldCode"
						}
					},
					"SaaSamMappingTableDS_SaaSamCreatoLookupFieldCode_8e9kskb": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamCreatoLookupFieldCode"
						}
					},
					"SaaSamMappingTableDS_SaaSamCreatioLookupFieldCode_0i62egn": {
						"modelConfig": {
							"path": "SaaSamMappingTableDS.SaaSamCreatioLookupFieldCode"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"SaaSamMappingTableDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "SaaSamMappingTable"
							}
						}
					},
					"primaryDataSourceName": "SaaSamMappingTableDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});