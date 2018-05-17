(function(window, undefined) {
  var dictionary = {
    "526c2888-33f7-4949-96d2-15b393dfe2ab": "PerfilPuesto",
    "cedfc416-66be-4f32-b35e-0c51a4da1ef5": "EvaluacionPuestoTrabajo",
    "5015fcda-3992-410f-bd61-6801b208d0ea": "PerfilPuestoJefeRH",
    "21068402-c0df-47aa-ad1a-96831d812632": "SolicitudTeletrabajadorJefeSuperior",
    "d974a630-a17a-441c-aa9c-f2190990c179": "SolicitudTeletrabajadorRH",
    "3c83300f-a6ab-42cf-8bb6-22f558837c55": "PlanTrabajadorJefeSuperior",
    "bc8e9dfe-2a52-4372-97e4-e77eca2a5dcd": "InicioJefeSuperior",
    "2de62f6b-3eba-497a-a039-dc6749c11c90": "AdministrarTeletrajadoresRH",
    "a0d4bbd6-d39b-4622-9d4d-36340432ca11": "InicioUsuario",
    "d56ce883-cbe1-4aa0-8403-d0bc627292de": "PerfilPuestoJefeSuperior",
    "b301da97-469b-472b-adee-ef8c14bbb984": "PlanTrabajador",
    "969e382c-95da-4c62-95af-3ca0302d2977": "AdministrarTeletrajadoresJefeSuperior",
    "8851225d-1c6a-4482-915e-ebe9032bdfb2": "PerfilLaboralJefeRH",
    "77f99df8-3fcb-4f7d-bf75-66cac57267a1": "Plan de Trabajo",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio",
    "3be00cca-aeec-4b00-ad3c-fe5e1a04dc4d": "BitacoraJefe",
    "7d444c4a-7ec9-455d-a2c5-3902650db157": "Login",
    "8af4f56c-b00a-4fda-b542-fd1bac2e6fb1": "SolicitudTeletrabajo",
    "e5014086-eca6-4811-ae65-99d0e6dfea71": "Bitacora",
    "e0c735b8-f01e-495e-9959-e9dfaac7059f": "PerfilLaboralJefeSuperior",
    "0d7cce5d-f4f6-4d82-b292-5c13283b3ff0": "DatosPersonales",
    "0fba5334-395a-49a2-a6de-58771ca92e62": "SolicitudTeletrabajador",
    "bca9b51c-2c22-4fcf-9922-74c0eb829aab": "PerfilLaboralJefe",
    "bf3cb98a-0120-45c6-b6d5-8700dbb5898d": "PerfilPuestoJefe",
    "f673419c-4b6f-4d3f-a1c2-628222374250": "InicioRH",
    "4b0c50b5-f866-4ce2-880e-2a65a5017eee": "AdministrarTeletrajadores",
    "2cb1c86f-b272-4150-830f-616c37d12b39": "BitacoraSuperior",
    "187c009b-0049-431b-a562-ac1ee7d62484": "InicioJefe",
    "7ae8da7f-ecaa-438e-b9d6-9cc0fb621778": "fundevi",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);