var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
//get energy source
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/meter-energy-sources/:id", requestOptions, idpurl)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


// get energy source meter types
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("${idpurl}/v1/meter-energy-sources/view/types", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



  //list meter energy source
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "pageFrom": 0,
  "pageSize": 10
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/meter-energy-sources/view", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //intialise meter energy sources
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

var raw = "";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/utility/energy-sources/init", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));