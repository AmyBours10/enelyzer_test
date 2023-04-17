var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var idpurl = "https://staging-idp.enprove.be";
var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "enelyzer-webapp");
urlencoded.append("username", "john.doe@enprove.be");
urlencoded.append("password", "enproveuser123");
urlencoded.append("grant_type", "password");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded.toString(), // Convert the URLSearchParams object to a string
  redirect: 'follow'
};

fetch(`${idpurl}/auth/realms/Enprove/protocol/openid-connect/token`, requestOptions)
  .then(response => response.json())
  .then(result => {
    const accessToken = result.access_token;
    console.log(accessToken);
    // Use the access token to make further API calls
  })
  .catch(error => console.log('error', error));
