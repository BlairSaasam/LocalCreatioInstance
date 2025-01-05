define("Contracts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SubordinateContractsExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 2,
						"rowSpan": 2
					}
				}
			},
			{
				"operation": "insert",
				"name": "Button_wj6drxx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_wj6drxx_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "SaaSamSendContractToAgiloft",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessRecordID"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_16pyfnr",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_SaaSamAgiloftId_c52e279",
					"labelPosition": "auto",
					"control": "$PDS_SaaSamAgiloftId_c52e279",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Checkbox_b5kxdy3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 9,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_SaaSamCheckbox_d6kzaah",
					"labelPosition": "auto",
					"control": "$PDS_SaaSamCheckbox_d6kzaah"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_oa1ydeo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 2
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Notes_7nzc6g1",
					"labelPosition": "auto",
					"control": "$PDS_Notes_7nzc6g1"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_SaaSamAgiloftId_c52e279": {
						"modelConfig": {
							"path": "PDS.SaaSamAgiloftId"
						}
					},
					"PDS_Notes_7nzc6g1": {
						"modelConfig": {
							"path": "PDS.Notes"
						}
					},
					"PDS_SaaSamCheckbox_d6kzaah": {
						"modelConfig": {
							"path": "PDS.SaaSamCheckbox"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});