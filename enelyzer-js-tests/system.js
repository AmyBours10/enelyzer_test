var idpurl = "https://staging-gateway.enprove.be";

//get system status
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/system/status", requestOptions, idpurl)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//get healtz
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));