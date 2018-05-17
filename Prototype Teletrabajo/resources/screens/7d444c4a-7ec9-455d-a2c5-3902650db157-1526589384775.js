jQuery("#simulation")
  .on("click", ".s-7d444c4a-7ec9-455d-a2c5-3902650db157 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-iniciar")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-name",
                    "property": "jimGetValue"
                  },"fquiros" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-password",
                    "property": "jimGetValue"
                  },"1234" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "index" ],
                    "value": "1"
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
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-name",
                    "property": "jimGetValue"
                  },"warguello" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-password",
                    "property": "jimGetValue"
                  },"1234" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/187c009b-0049-431b-a562-ac1ee7d62484"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-name",
                    "property": "jimGetValue"
                  },"rrhh" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-password",
                    "property": "jimGetValue"
                  },"1234" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f673419c-4b6f-4d3f-a1c2-628222374250"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-name",
                    "property": "jimGetValue"
                  },"jefatura" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-password",
                    "property": "jimGetValue"
                  },"1234" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bc8e9dfe-2a52-4372-97e4-e77eca2a5dcd"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rich_text_1","#s-Button_19" ]
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
    } else if(jFirer.is("#s-Button_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rich_text_1","#s-Button_19" ]
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