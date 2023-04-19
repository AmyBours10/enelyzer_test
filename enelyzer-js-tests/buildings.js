
var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var buildingid = "e4a3606f-2c25-48ab-8bd7-c600757f9ea5";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";

//create building
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Trust1Teamate",
  "friendlyName": "Trust1Team 3",
  "buildingType": "OFFICE",
  "facilityId": "1aab41af-e2a0-44dd-9715-b884d0c23e7f",
  "address": {
    "addressLine1": "Nieuwebosstraat 5",
    "postalCode": "9000",
    "country": "Belgium",
    "city": "Brussels"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/organisations/${orgid}/buildings", requestOptions, gatewayurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// update building
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Trust1Team Old Offices 45",
  "friendlyName": "Trust1Team 3",
  "buildingType": "OFFICE",
  "floors": 4
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/organisations/${orgid}/buildings/${buildingid}", requestOptions, gatewayurl, orgid, buildingid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //update building owner
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "name": "Michallis test user",
    "rental": false
  });
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("${gatewayurl}/v1/organisations/${orgid}/buildings/${buildingid}/owner", requestOptions, gatewayurl, orgid, buildingid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    // update building info

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "info": "Very hot in the summer time"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/organisations/${orgid}/buildings/${buildingid}/info", requestOptions, gatewayurl, orgid, buildingid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update building technical info

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "surface": 1,
  "volume": 2,
  "peopleCount": 3,
  "quotity": 4,
  "percentage": 0.5
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/organisations/${orgid}/buildings/${buildingid}/technical-info", requestOptions, gatewayurl, orgid, buildingid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //update building address

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "addressLine1": "nieuwebosstraat 10",
  "postalCode": "9000",
  "city": "Ghent",
  "countryCode": "BE"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/buildings/${buildingid}/organisations/${orgid}/address", requestOptions, gatewayurl, buildingid, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  // add building to facility

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "buildingId": "coachhouse"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/buildings/${buildingid}/building", requestOptions, gatewayurl, buildingid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //remove building from facility

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "buildingId": "coachhouse"
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/buildings/${buildingid}/building", requestOptions, idpurl, buildingid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //update image map 
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "position": 2,
  "labels": [
    {
      "assetType": "MACHINE_GROUP",
      "assetId": "a88fce14-7876-48a8-8d2b-e141c954e352",
      "label": "test",
      "coordinates": {
        "x": 22,
        "y": 4
      }
    }
  ],
  "image": {
    "name": "coachhouse",
    "uri": "https://storage.googleapis.com/enelyzer-staging-images/images/floor-plan.png",
    "imageType": "CUSTOM"
  }
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/organisations/${orgid}/facilities/{facilityid}/images/:image-map-id", requestOptions, gatewayurl, orgid, facilityId)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// update geolocation

// add image map to building

//remove image map from building

//get buildings

//get building

//remove building

//restore building

//update photo

//import buildings