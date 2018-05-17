jQuery("#simulation")
  .on("click", ".s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-next_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 #s-lb_pestanna > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F3F3F3"
                      }
                    }
                  },{
                    "#s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 #s-lb_pestanna": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
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
                    "#s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 #s-lb_jefatura > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 #s-lb_jefatura": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
    } else if(jFirer.is("#s-sl_provincias")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-sl_provincias",
                  "property": "jimGetSelectedValue"
                },"Alajuela" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-sl_cantones" ],
                    "value": "Alajuela,San Ramón,Grecia,San Mateo,Naranjo,Atenas,Palmares,Poás,Orotina,San Carlos,Alfaro Ruiz,Guatuso,Los Chiles,Upala,Valverde Vega"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-sl_provincias",
                  "property": "jimGetSelectedValue"
                },"San Jóse" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-sl_cantones" ],
                    "value": "Acosta,Alajuelita,Aserrí,Curridabat,Desamparados,Dota,Escazú,Goicoechea,León Cortés,Montes de Oca,Mora,Moravia,Pérez Zeledón,Puriscal,San José,Santa Ana,Tarrazú,Tibás,Turrubares,Vásquez de Coronado"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-sl_provincias",
                  "property": "jimGetSelectedValue"
                },"Cartago" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-sl_cantones" ],
                    "value": "Alvarado,Cartago,El Guarco,Jiménez,La Unión,Oreamuno,Paraíso,Turrialba"
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
    } else if(jFirer.is("#s-sl_cantones")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-sl_cantones",
                  "property": "jimGetSelectedValue"
                },"Cartago" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-sl_distritos" ],
                    "value": "PACAYAS,CERVANTES,CAPELLADES,ORIENTAL,OCCIDENTAL,CARMEN,SAN NICOLAS,AGUA CALIENTE (SAN FCO),GUADALUPE (ARENILLA),CORRALILLO,LLANO GRANDE"
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
                    "target": [ "#s-sl_distritos" ],
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
    } else if(jFirer.is("#s-next_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 #s-lb_jefatura > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F3F3F3"
                      }
                    }
                  },{
                    "#s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 #s-lb_jefatura": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
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
                    "#s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 #s-lb_jefatura_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 #s-lb_jefatura_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
    } else if(jFirer.is("#s-next_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "index" ],
                    "value": "2"
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
  })
  .on("change", ".s-0d7cce5d-f4f6-4d82-b292-5c13283b3ff0 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_1",
                  "property": "jimGetSelectedValue"
                },"Interino" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-cl_nombramiento","#s-lb_fecha_nombramiento" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-tb_correo_personal" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "316"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "183"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-lb_correo_personal" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "316"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "55"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-lb_direccion_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "276"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "70"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-tb_direccion_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "276"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "183"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-tb_direccion_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "236"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "183"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-lb_direccion_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "236"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "85"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-tb_cargo" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "196"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "183"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-lb_cargo" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "196"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "124"
                    },
                    "containment": false
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
                    "target": [ "#s-cl_nombramiento","#s-lb_fecha_nombramiento" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-tb_correo_personal" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "276"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "183"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-lb_correo_personal" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "276"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "60"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-lb_direccion_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "236"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "70"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-tb_direccion_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "236"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "183"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-tb_direccion_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "196"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "183"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-lb_direccion_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "196"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "85"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-tb_cargo" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "156"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "183"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-lb_cargo" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "156"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "124"
                    },
                    "containment": false
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