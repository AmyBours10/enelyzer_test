var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var assetgroupid = "0cb1d68e-36e7-40c5-9042-e0d7bf8d9217";

//create asset group
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Asset Group 2",
  "assets": [
    {
      "assetId": "asset_id_11",
      "assetType": "BUILDING"
    },
    {
      "assetId": "asset_id_22",
      "assetType": "FACILITY"
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/asset-groups", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //search asset groups
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
  
  fetch("${idpurl}/v1/organisations/${orgid}/asset-groups/search", requestOptions, idpurl, orgid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  //update asset group
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "name": "Brussels Facilties"
  });
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/organisations/${orgid}/asset-groups/${assetgroupid}", requestOptions, idpurl, orgid, assetgroupid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  //get asset group
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/organisations/${orgid}/asset-groups/${assetgroupid}", requestOptions, idpurl, orgid, assetgroupid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


  ///disable asset group
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Brussels Facilties"
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/asset-groups/${assetgroupid}", requestOptions, idpurl, orgid, assetgroupid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  //enable asset group
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Brussels Facilties"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/asset-groups/${assetgroupid}/enable", requestOptions, idpurl, orgid, assetgroupid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //add asset to asset group
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "assetType": "BUILDING",
  "assetId": "building_id_01"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/asset-groups/123/assets", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  //remove asset from asset group

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "assetType": "BUILDING",
  "assetId": "building_id_01"
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/asset-groups/${assetgroupid}/assets", requestOptions, idpurl, orgid, assetgroupid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));