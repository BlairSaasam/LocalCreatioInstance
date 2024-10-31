define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "56f4b94f-e62e-4921-9174-6248a92c6575",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_9sdhnm5_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcAvgPriceProcessMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_adbkinz_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_c22f1da",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GetMaxPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_scv9xvl_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "export-data-button-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_pd4ploz_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceEUR_l61bqlx",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceEUR_l61bqlx"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_ey1znns",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_ey1znns"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommissionEUR_iomoyic",
					"labelPosition": "above",
					"control": "$PDS_UsrCommissionEUR_iomoyic",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_zxaxg8h",
					"labelPosition": "above",
					"control": "$PDS_UsrType_zxaxg8h",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_yian6ti",
					"labelPosition": "above",
					"control": "$PDS_UsrOfferType_yian6ti",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_3zgops6",
					"labelPosition": "above",
					"control": "$PDS_UsrComment_3zgops6",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_o33822z",
					"labelPosition": "above",
					"control": "$PDS_UsrManager_o33822z",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_udleg2h",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_udleg2h_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_5wq333h",
					"labelPosition": "above",
					"control": "$PDS_UsrCountry_5wq333h",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_gx1n3it",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gx1n3it_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Country",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_tc0rqn7",
					"labelPosition": "above",
					"control": "$PDS_UsrCity_tc0rqn7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_eyrjcv9",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_eyrjcv9_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Region",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRegion_wxyg1h5",
					"labelPosition": "above",
					"control": "$PDS_UsrRegion_wxyg1h5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_95hp5q2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_95hp5q2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Region",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_2u05cps",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ru84pr3",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ru84pr3_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_acrxxrk",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ru84pr3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_luvwx6b",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_acrxxrk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_8ohz8jg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_8ohz8jg_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_luvwx6b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_8ws302s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_8ws302s_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_gzlvvccDS"
						}
					}
				},
				"parentName": "FlexContainer_luvwx6b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_kx86nph",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_kx86nph_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_luvwx6b",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_khspxhj",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_khspxhj_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_gzlvvcc"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_kx86nph",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_srj14yz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_srj14yz_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_kx86nph",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_h8dk5hs",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_h8dk5hs_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_h8dk5hs_GridDetail_gzlvvcc",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_gzlvvcc"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_h8dk5hs_SearchValue",
							"GridDetailSearchFilter_h8dk5hs_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_luvwx6b",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_b36qe3u",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ru84pr3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gzlvvcc",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_gzlvvcc",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_gzlvvccDS_Id",
					"columns": [
						{
							"id": "22187867-a9d4-bd8a-85a2-4a0b556c2f6a",
							"code": "GridDetail_gzlvvccDS_UsrPlannedDate",
							"caption": "#ResourceString(GridDetail_gzlvvccDS_UsrPlannedDate)#",
							"dataValueType": 7
						},
						{
							"id": "148b34bc-c2f9-a7d6-7435-042776a46538",
							"code": "GridDetail_gzlvvccDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_gzlvvccDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "42302b9b-c2d8-8972-b960-2bd583db3934",
							"code": "GridDetail_gzlvvccDS_UsrManager",
							"caption": "#ResourceString(GridDetail_gzlvvccDS_UsrManager)#",
							"dataValueType": 10
						},
						{
							"id": "e0d84551-5c75-2882-5b8b-a4953574fbae",
							"code": "GridDetail_gzlvvccDS_UsrColumn5",
							"caption": "#ResourceString(GridDetail_gzlvvccDS_UsrColumn5)#",
							"dataValueType": 28
						},
						{
							"id": "c41097d1-0f56-c38f-ac58-7fd05a80ca21",
							"code": "GridDetail_gzlvvccDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_gzlvvccDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_b36qe3u",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceEUR_l61bqlx": {
						"modelConfig": {
							"path": "PDS.UsrPriceEUR"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_ey1znns": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_zxaxg8h": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_yian6ti": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_3zgops6": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_o33822z": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrCity_tc0rqn7": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCountry_5wq333h": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrRegion_wxyg1h5": {
						"modelConfig": {
							"path": "PDS.UsrRegion"
						}
					},
					"PDS_UsrCommissionEUR_iomoyic": {
						"modelConfig": {
							"path": "PDS.UsrCommissionEUR"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_gzlvvcc": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gzlvvccDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_h8dk5hs_GridDetail_gzlvvcc",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gzlvvccDS_UsrPlannedDate": {
									"modelConfig": {
										"path": "GridDetail_gzlvvccDS.UsrPlannedDate"
									}
								},
								"GridDetail_gzlvvccDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_gzlvvccDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_gzlvvccDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_gzlvvccDS.UsrManager"
									}
								},
								"GridDetail_gzlvvccDS_UsrColumn5": {
									"modelConfig": {
										"path": "GridDetail_gzlvvccDS.UsrColumn5"
									}
								},
								"GridDetail_gzlvvccDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_gzlvvccDS.CreatedOn"
									}
								},
								"GridDetail_gzlvvccDS_Id": {
									"modelConfig": {
										"path": "GridDetail_gzlvvccDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_gzlvvccDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_gzlvvccDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrPlannedDate": {
									"path": "UsrPlannedDate"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrColumn5": {
									"path": "UsrColumn5"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
              request: "usr.PushButtonRequest",
             /* Implementation of the custom query handler. */
             handler: async (request, next) => {
               console.log("Button works...");
               Terrasoft.showInformation("My button was pressed.");
               var price = await request.$context.PDS_UsrPriceEUR_l61bqlx;
               console.log("Price = " + price);
               request.$context.PDS_UsrArea_ey1znns = price * 0.2;
               /* Call the next handler if it exists and return its result. */
               return next?.handle(request);
             }
            },  
			{			
              request: "crt.HandleViewModelAttributeChangeRequest",
              /* The custom implementation of the system query handler. */
              handler: async (request, next) => { 
                if (request.attributeName === 'PDS_UsrPriceEUR_l61bqlx' ||
                    // if price changed
                    request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 	
                  // or percent changed
                  var price = await request.$context.PDS_UsrPriceEUR_l61bqlx;
                  var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
                  var commission = price * percent / 100;
                  request.$context.PDS_UsrCommissionEUR_iomoyic = commission;
	                }
					/* Call the next handler if it exists and return its result. */		
                return next?.handle(request);
              }	
            },
            {
              request: "usr.RunWebServiceButtonRequest",
              /* Implementation of the custom query handler. */
              handler: async (request, next) => {                
              console.log("Run web service button works...");
                
              // get id from type lookup type object
               var typeObject = await request.$context.PDS_UsrType_zxaxg8h;
               var typeId = "";
               if (typeObject) {
                 typeId = typeObject.value;
               }
                
              // get id from type lookup offer type object
               var offerTypeObject = await request.$context.PDS_UsrOfferType_yian6ti;
               var offerTypeId = "";
               if (offerTypeObject) {
                 offerTypeId = offerTypeObject.value;
               }
                
             /* Create an instance of the HTTP client from @creatio-devkit/common. */
               const httpClientService = new sdk.HttpClientService();
                
              /* Specify the URL to run web service method. */
               const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
               const transferName = "rest";
               const serviceName = "RealtyService";
               const methodName = "GetMaxPriceByTypeId";
               const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);  
                
               //const endpoint = "http://localhost/D1_Studio/0/rest/RealtyService/GetMaxPriceByTypeId";
               /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
               var params = {
                 realtyTypeId: typeId,
                 realtyOfferTypeId: offerTypeId,
                 entityName: "UsrRealty"
               };
               const response = await httpClientService.post(endpoint, params);

              console.log(typeId + " " + offerTypeId);
               console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
                
               /* Call the next handler if it exists and return its result. */
               return next?.handle(request);
             }
           }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          /* The validator type must contain a vendor prefix.
          Format the validator type in PascalCase. */
          "usr.DGValidator": {
            validator: function (config) {
              return function (control) {
                let value = control.value;
                let minValue = config.minValue;
                let valueIsCorrect = value >= minValue;
                var result;
                if (valueIsCorrect) {
                  result = null;
                } else {
                  result = {
                    "usr.DGValidator": { 
                      message: config.message
                    }
                  };
                }
                return result;
              };
            },
            params: [
              {
                name: "minValue"
              },
              {
                name: "message"
              }
            ],
            async: false
          }
        }/**SCHEMA_VALIDATORS*/
	};
});