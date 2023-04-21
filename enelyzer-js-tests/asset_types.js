var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";

// get asset types
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/asset-types?from=0&size=20", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//get asset type
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/asset-types/BUILDING", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//get asset sub type
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/asset-types/BUILDING/sub-type/PRODUCTION_BUILDING", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//create new asset type
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var raw = JSON.stringify({
  "name": "Machine Group",
  "description": "Machine Group Types",
  "subTypes": [
    {
      "name": "Chiller",
      "description": "Chiller"
    },
    {
      "name": "Cogeneration",
      "description": "Cogeneration"
    },
    {
      "name": "Heatpump",
      "description": "Heatpump"
    },
    {
      "name": "Steamboiler",
      "description": "Steamboiler"
    },
    {
      "name": "Compressed air",
      "description": "Compressed air"
    },
    {
      "name": "HVAC System",
      "description": "HVAC System"
    },
    {
      "name": "Photovoltaic Panels",
      "description": "Photovoltaic Panels"
    },
    {
      "name": "Windturbine",
      "description": "Windturbine"
    },
    {
      "name": "Heater",
      "description": "Heater"
    },
    {
      "name": "Water purification",
      "description": "Water purification"
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/asset-types", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//update asset type
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "assetTypeId": "MACHINE",
  "name": "Machine",
  "description": "Machine Types",
  "subTypes": [
    {
      "name": "Pump",
      "description": "Pump"
    },
    {
      "name": "Dryer",
      "description": "Dryer"
    },
    {
      "name": "Motor",
      "description": "Motor"
    },
    {
      "name": "Condenser",
      "description": "Condenser"
    },
    {
      "name": "Evaporator",
      "description": "Evaporator"
    },
    {
      "name": "Incinerator",
      "description": "Incinerator"
    },
    {
      "name": "Oven",
      "description": "Oven"
    }
  ]
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/asset-types", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//add sub type to asset type
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "assetTypeId": "BUILDING",
  "subTypeName": "Solar Panel",
  "description": "Solar Panel",
  "iconUri": "https://google.com/solar-panel.png"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/asset-types/sub-type", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//update sub type
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "assetTypeId": "BUILDING",
  "subTypeName": "Solar Panel",
  "description": "Solar Panel",
  "iconUri": "https://google.com/solar-panel.png"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/asset-types/sub-type", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//remove sub type from asset type
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "assetTypeId": "BUILDING",
  "subTypeId": "WATER_PURIFICATION"
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/asset-types/sub-type", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));