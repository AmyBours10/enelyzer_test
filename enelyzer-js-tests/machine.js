var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var machineid = "ba6353ab-7fc5-4860-8867-6e33446c3b9b"

// post create machine
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "machine 01",
  "friendlyName": "Trust1Team 3",
  "responsible": "Gilles <script> alert(\"Hey\");</script> Platteeuw",
  "machineType": "PUMP",
  "parent": {
    "assetType": "MACHINE",
    "assetId": "mg01"
  }
});


// get machine
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machines", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//list machine
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machines/${machineid}", requestOptions, idpurl, orgid, machineid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//update machine
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

fetch("${idpurl}/v1/organisations/${orgid}/machines/search", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//add maintenance document to machine
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "parentId": "02b24ae1-65ea-4edf-a2fc-046714d429c2",
  "name": "updated_fsdfs",
  "friendlyName": "UPDATED fsdfs",
  "machineType": "PUMP",
  "responsible": "d9328a38-c90d-4c6d-9154-e835f8654c8a",
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

fetch("${idpurl}/v1/organisations/${orgid}/machines/${machineid}", requestOptions, idpurl, orgid, machineid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


 //update maintenance document 
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "maintenanceDoc02",
  "uri": "http://google.com/incident.pdf",
  "maintenanceDocumentType": "MAINTENANCE_REPORT",
  "documentDate": "2021-01-01T00:00:00.000000Z"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machines/${machineid}/documents/maintenance", requestOptions, idpurl, orgid, machineid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//delete maintenance document
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "maintenanceDoc0452 updated",
  "uri": "http://google.com/incident2.pdf",
  "maintenanceDocumentType": "WORK_REPORT",
  "documentDate": "2021-01-01T00:00:00.000000Z"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machines/${machineid}/documents/maintenance/5cce2f5c-333a-4ee7-80f7-2c6a4a23c3c5", requestOptions, idpurl, orgid, machineid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// post add image map
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/machines/${machineid}/documents/maintenance/5cce2f5c-333a-4ee7-80f7-2c6a4a23c3c5", requestOptions, idpurl, orgid, machineid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//put update image map
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

fetch("{idpurl}/v1/organisations/${orgid}/machines/${machineid}/images", requestOptions, idpurl, machineid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//delete image map
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

fetch("{idpurl}/v1/organisations/${orgid}/machines/${machineid}/images", requestOptions, idpurl, orgid, machineid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch("{idpurl}/v1/organisations/${orgid}/machines/${machineid}/images?position=0", requestOptions, idpurl, orgid, machineid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//post import machines
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var formdata = new FormData();
formdata.append("file", fileInput.files[0], "machine_sample.csv");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("{idpurl}/v1/organisations/${orgid}/machines/import/new", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));