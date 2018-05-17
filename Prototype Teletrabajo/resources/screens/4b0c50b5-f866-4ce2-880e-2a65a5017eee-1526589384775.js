jQuery("#simulation")
  .on("click", ".s-4b0c50b5-f866-4ce2-880e-2a65a5017eee .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0fba5334-395a-49a2-a6de-58771ca92e62"
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
                    "target": "screens/4b0c50b5-f866-4ce2-880e-2a65a5017eee"
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bf3cb98a-0120-45c6-b6d5-8700dbb5898d"
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
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bca9b51c-2c22-4fcf-9922-74c0eb829aab"
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
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b301da97-469b-472b-adee-ef8c14bbb984"
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
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3be00cca-aeec-4b00-ad3c-fe5e1a04dc4d"
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
  .on("mouseenter dragenter", ".s-4b0c50b5-f866-4ce2-880e-2a65a5017eee .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_41") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_41 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_41": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_41 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_41 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_41": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_42 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_42": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_42 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_42 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_42": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_43 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_43": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_43 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_43 span": {
                      "attributes": {
                        "color": "#005580",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-4b0c50b5-f866-4ce2-880e-2a65a5017eee #s-Label_43": {
                      "attributes-ie": {
                        "-pie-background": "#F5F5F5",
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
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-4b0c50b5-f866-4ce2-880e-2a65a5017eee .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_41")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_42")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_43")) {
      jEvent.undoCases(jFirer);
    }
  });