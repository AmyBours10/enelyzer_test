var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var machineid = "ba6353ab-7fc5-4860-8867-6e33446c3b9b";
var machinegroups = "02b24ae1-65ea-4edf-a2fc-046714d429c2";
var maintenancedoc = "b3a5951e-c1c9-4367-ab72-41a72071bf98";

//post machine group
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "name": "machine group 01",
  "friendlyName": "Trust1Team 3",
  "responsible": "Gilles <script> alert(\"Hey\");</script> Platteeuw",
  "machineGroupType": "COGENERATION",
  "parent": {
    "assetType": "FACILITY",
    "assetId": "23e0158d-7854-48b4-8c00-994262c85acd"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  // get machine group
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/${machinegroups}", requestOptions, idpurl, orgid, machinegroups)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  //post list machine groups
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 100,
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/search", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  // update machine group
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "name": "machine group 01 edited",
  "friendlyName": "Trust1Team 3",
  "responsible": "Gilles <script> alert(\"Hey\");</script> Platteeuw",
  "machineGroupType": "COGENERATION",
  "parent": {
    "assetType": "FACILITY",
    "assetId": "23e0158d-7854-48b4-8c00-994262c85acd"
  },
  "additionalInfo": {
    "manufacturer": "manufacturer 1",
    "model": "model 1"
  },
  "installation": {
    "installer": "Installer",
    "yearOfInstallation": 2022,
    "installedPower": {
      "value": 10,
      "unit": "KW"
    }
  }
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/${machinegroups}", requestOptions, idpurl, orgid, machinegroups)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  //add maintenance document 
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "maintenanceDoc02",
  "uri": "http://google.com/incident.pdf",
  "maintenanceDocumentType": "CALIBRATION_REPORT",
  "documentDate": "2021-01-01T00:00:00.000000Z"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/${machinegroups}/documents/maintenance", requestOptions, idpurl, orgid, machinegroups)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update maintenance doc
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "maintenanceDoc02 edited",
  "uri": "http://google.com/incident2.pdf",
  "maintenanceDocumentType": "MAINTENANCE_REPORT",
  "documentDate": "2021-01-01T00:00:00.000000Z"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/${machinegroups}/documents/maintenance/${maintenancedoc}", requestOptions, idpurl, orgid, machinegroups, maintenancedoc)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  //delete maintenance documents
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  
var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/${machinegroups}/documents/maintenance/${maintenancedoc}", requestOptions, idpurl, orgid, machinegroups, maintenancedoc)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  // add image map
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "position": 1,
  "labels": [
    {
      "label": "panic button",
      "coordinates": {
        "x": 0,
        "y": 0,
        "width": 15,
        "heigth": 20
      }
    }
  ],
  "image": {
    "name": "overview",
    "uri": "https://google.com/picture.png",
    "imageType": "CUSTOM"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/${machinegroups}/images", requestOptions, idpurl, orgid, machinegroups, images)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update image map
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "position": 0,
  "labels": [
    {
      "label": "shut down button",
      "coordinates": {
        "x": 0,
        "y": 0,
        "width": 15,
        "heigth": 20
      }
    }
  ],
  "image": {
    "name": "overview",
    "uri": "https://google.com/picture.png",
    "imageType": "CUSTOM"
  }
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/machine-groups/${machinegroups}/images", requestOptions, idpurl, machinegroups)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//delete image map
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  
var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/${machinegroups}/images/imageMap.id", requestOptions, idpurl, orgid, machinegroups)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//disable image map
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/${machinegroups}", requestOptions, idpurl, orgid, machinegroups)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//enable machine group
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
 
var raw = "";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/${machinegroups}/enable", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//import machines groups
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var formdata = new FormData();
formdata.append("file", fileInput.files[0], "machine_group_sample.csv");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machine-groups/import/new", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));