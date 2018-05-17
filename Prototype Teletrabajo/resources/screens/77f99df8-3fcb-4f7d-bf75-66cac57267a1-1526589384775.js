jQuery("#simulation")
  .on("click", ".s-77f99df8-3fcb-4f7d-bf75-66cac57267a1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-next_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-metas_objetivo" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77f99df8-3fcb-4f7d-bf75-66cac57267a1 #s-lb_pestanna_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-77f99df8-3fcb-4f7d-bf75-66cac57267a1 #s-lb_pestanna_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77f99df8-3fcb-4f7d-bf75-66cac57267a1 #s-lb_pestanna > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F3F3F3"
                      }
                    }
                  },{
                    "#s-77f99df8-3fcb-4f7d-bf75-66cac57267a1 #s-lb_pestanna": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-next_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-entregables" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77f99df8-3fcb-4f7d-bf75-66cac57267a1 #s-lb_pestanna_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-77f99df8-3fcb-4f7d-bf75-66cac57267a1 #s-lb_pestanna_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77f99df8-3fcb-4f7d-bf75-66cac57267a1 #s-lb_pestanna_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F3F3F3"
                      }
                    }
                  },{
                    "#s-77f99df8-3fcb-4f7d-bf75-66cac57267a1 #s-lb_pestanna_1": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_1",
                  "property": "jimGetSelectedValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-agregar_3","#s-Input_27","#s-Text_26","#s-Input_23","#s-Input_26","#s-Input_25","#s-Input_29","#s-Dynamic_Panel_1","#s-Input_32","#s-Text_30","#s-Input_22","#s-Input_30","#s-Input_33","#s-Input_24","#s-Text_27","#s-Text_29","#s-Input_31","#s-Text_28","#s-Text_25","#s-Input_28" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-agregar_3","#s-Input_27","#s-Text_26","#s-Input_23","#s-Input_26","#s-Input_25","#s-Input_29","#s-Input_32","#s-Text_30","#s-Input_22","#s-Input_30","#s-Input_33","#s-Input_24","#s-Text_27","#s-Text_29","#s-Input_31","#s-Text_28","#s-Text_25","#s-Input_28" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_2",
                  "property": "jimGetSelectedValue"
                },"Desarrollo de Aplicaciones" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Category_3" ],
                    "value": ",Desarrollo Paquete Dominio,Desarrollo Paquete Datos,Desarrollo Paquete Negocios,Desarrollo Interfaz"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Category_3" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_3",
                  "property": "jimGetSelectedValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Input_34","#s-Text_35","#s-Input_39","#s-Input_37","#s-Text_33","#s-Input_35","#s-Text_34","#s-Text_32","#s-Category_4","#s-Text_31","#s-agregar_4","#s-Category_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Input_34","#s-Text_35","#s-Input_39","#s-Input_37","#s-Text_33","#s-Input_35","#s-Text_34","#s-Text_32","#s-Category_4","#s-Text_31","#s-agregar_4","#s-Category_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_4",
                  "property": "jimGetSelectedValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-agregar_3","#s-Input_39","#s-Text_32","#s-Input_35","#s-Input_37","#s-Dynamic_Panel_1","#s-Input_34","#s-Text_33","#s-Text_34","#s-Text_31" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-agregar_3","#s-Input_39","#s-Text_32","#s-Input_35","#s-Input_37","#s-Input_34","#s-Text_33","#s-Text_34","#s-Text_31" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_5",
                  "property": "jimGetSelectedValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-agregar_3","#s-Input_39","#s-Text_32","#s-Input_35","#s-Input_37","#s-Dynamic_Panel_1","#s-Input_34","#s-Text_33","#s-Text_34","#s-Text_31" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-agregar_3","#s-Input_39","#s-Text_32","#s-Input_35","#s-Input_37","#s-Input_34","#s-Text_33","#s-Text_34","#s-Text_31" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-next_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "index" ],
                    "value": "6"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a0d4bbd6-d39b-4622-9d4d-36340432ca11"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-perfil")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0d7cce5d-f4f6-4d82-b292-5c13283b3ff0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/526c2888-33f7-4949-96d2-15b393dfe2ab"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-solicitud_teletrabajo")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8af4f56c-b00a-4fda-b542-fd1bac2e6fb1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cedfc416-66be-4f32-b35e-0c51a4da1ef5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/77f99df8-3fcb-4f7d-bf75-66cac57267a1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Login")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7d444c4a-7ec9-455d-a2c5-3902650db157",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });