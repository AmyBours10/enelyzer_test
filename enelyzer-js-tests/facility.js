
var idpurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var apiurl = "https://staging-gateway.enprove.be"
//create fac
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

const accessToken = result.access_token;

var raw = JSON.stringify({
  "name": "MPTest01Comp",
  "friendlyName": "f2",
  "facilityType": "HQ",
  "address": {
    "addressLine1": "Nieuwebosstraat 5",
    "postalCode": "9000",
    "city": "Brussels",
    "country": "Belgium"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/facilities MPTest01Comp", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//import fac
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var formdata = new FormData();
formdata.append("file", fileInput.files[0], "facility_sample.csv");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/facilities/import/new", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//update fac
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Trust1Team2",
  "friendlyName": "Trust1Team 3",
  "facilityType": "HQ"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  
//update facility owner
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Trust1Team2",
  "friendlyName": "Trust1Team 3",
  "facilityType": "HQ"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update facility info
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

fetch("${idpurl}/v1/organisations/${orgid}/info", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update fac adress
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "addressLine1": "Nieuwebosstraat 5",
  "postalCode": "9000",
  "city": "Brussels",
  "country": "Belgium",
  "countryCode": "BE"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f/address", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//add building to fac
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

fetch("${apiurl}/v1/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f/building", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//remove building from fac
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

fetch("${apiurl}/v1/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f/building", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update geolocation
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "lat": 51.0491128,
  "lng": 3.7359751,
  "zoom": 4
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${apiurl}/v1/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f/geo", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//add image map to fac
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhY0FpVFZnRTFYa0RPWlRJLVZZUFZWdE9xbzlqcWtTOEFmZklMWGJXSjhnIn0.eyJleHAiOjE2ODE3MzcwNDEsImlhdCI6MTY4MTcxOTA0MSwianRpIjoiYjU2NTIzYzgtNGM2Yy00M2Q5LThkNTMtYmM5NDQxYmJiODE5IiwiaXNzIjoiaHR0cHM6Ly9zdGFnaW5nLWlkcC5lbnByb3ZlLmJlL2F1dGgvcmVhbG1zL0VucHJvdmUiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNGY4NjliZGEtMGEyOS00ZGVmLWE0ODgtYjI4ZmZmOGU1ZTA4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZW5lbHl6ZXItd2ViYXBwIiwic2Vzc2lvbl9zdGF0ZSI6IjA3ZGU4MGUwLTY3MjgtNDFmMS04MDJmLTY3YjUzOTY1Yjg3MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9zdGFnaW5nLWVuZWx5emVyLmVucHJvdmUuYmUiLCJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJodHRwOi8vbG9jYWxob3N0OjgwODEiLCJodHRwczovL3N0YWdpbmctYWN0aW9ucy5lbnByb3ZlLmJlIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1lbnByb3ZlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiMDdkZTgwZTAtNjcyOC00MWYxLTgwMmYtNjdiNTM5NjViODcxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiam9obiBkb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiI4MDgzNTA2My04MjM4LTRjM2EtODA5MC0wZjE4NGQ1NjY4ZDAiLCJnaXZlbl9uYW1lIjoiam9obiIsImZhbWlseV9uYW1lIjoiZG9lIiwiZW1haWwiOiJqb2huLmRvZUBlbnByb3ZlLmJlIn0.gC79VUq0GV2FJIB4-6iZJDLcB2bPKePoqqTxOYj-7IQ1ZgWfF3tlBGk1h74kG48Ufyc36R2qNA1WlL6VwMNdG3U938M3g94KTi6mtfHpPwsZqfElptLNxN8lUXtqFLqaFeT0vaH7-kUp3LSaKvcHqvsk9HmCPL7V062TVDR_SrH8GdL8GSHJ3wmfIUC9G0rrNQXU3KZK3JBkRaWcLdbd5VQkR6NQrwafdLlSkzI8KnHBI-gweMxoHR-ly1AjZZ4ZzedJ9vSypII_-cNBoHsk0491r7Htm-_34yTosLNJ1uUovwAGuIWym4KKbw19iIRQN44pEpIb2I1x1wLT_jq2xw");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "image": {
    "name": "coachhouse",
    "uri": "http://google.com/favicon.ico",
    "imageType": "CUSTOM"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f/images", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update image map to fac
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

fetch("https://staging-gateway.enprove.be/v1/organisations/00e28801-3fd2-4841-98cc-9bdcef094774/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f/images/:image-map-id", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//remove inmage map from fac
var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch("https://staging-gateway.enprove.be/v1/organisations/00e28801-3fd2-4841-98cc-9bdcef094774/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f/images/:image-map-id", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//get facilities
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhY0FpVFZnRTFYa0RPWlRJLVZZUFZWdE9xbzlqcWtTOEFmZklMWGJXSjhnIn0.eyJleHAiOjE2ODE3MzcwNDEsImlhdCI6MTY4MTcxOTA0MSwianRpIjoiYjU2NTIzYzgtNGM2Yy00M2Q5LThkNTMtYmM5NDQxYmJiODE5IiwiaXNzIjoiaHR0cHM6Ly9zdGFnaW5nLWlkcC5lbnByb3ZlLmJlL2F1dGgvcmVhbG1zL0VucHJvdmUiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNGY4NjliZGEtMGEyOS00ZGVmLWE0ODgtYjI4ZmZmOGU1ZTA4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZW5lbHl6ZXItd2ViYXBwIiwic2Vzc2lvbl9zdGF0ZSI6IjA3ZGU4MGUwLTY3MjgtNDFmMS04MDJmLTY3YjUzOTY1Yjg3MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9zdGFnaW5nLWVuZWx5emVyLmVucHJvdmUuYmUiLCJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJodHRwOi8vbG9jYWxob3N0OjgwODEiLCJodHRwczovL3N0YWdpbmctYWN0aW9ucy5lbnByb3ZlLmJlIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1lbnByb3ZlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiMDdkZTgwZTAtNjcyOC00MWYxLTgwMmYtNjdiNTM5NjViODcxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiam9obiBkb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiI4MDgzNTA2My04MjM4LTRjM2EtODA5MC0wZjE4NGQ1NjY4ZDAiLCJnaXZlbl9uYW1lIjoiam9obiIsImZhbWlseV9uYW1lIjoiZG9lIiwiZW1haWwiOiJqb2huLmRvZUBlbnByb3ZlLmJlIn0.gC79VUq0GV2FJIB4-6iZJDLcB2bPKePoqqTxOYj-7IQ1ZgWfF3tlBGk1h74kG48Ufyc36R2qNA1WlL6VwMNdG3U938M3g94KTi6mtfHpPwsZqfElptLNxN8lUXtqFLqaFeT0vaH7-kUp3LSaKvcHqvsk9HmCPL7V062TVDR_SrH8GdL8GSHJ3wmfIUC9G0rrNQXU3KZK3JBkRaWcLdbd5VQkR6NQrwafdLlSkzI8KnHBI-gweMxoHR-ly1AjZZ4ZzedJ9vSypII_-cNBoHsk0491r7Htm-_34yTosLNJ1uUovwAGuIWym4KKbw19iIRQN44pEpIb2I1x1wLT_jq2xw");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://staging-gateway.enprove.be/v1/organisations/00e28801-3fd2-4841-98cc-9bdcef094774/facilities", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//get facility
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhY0FpVFZnRTFYa0RPWlRJLVZZUFZWdE9xbzlqcWtTOEFmZklMWGJXSjhnIn0.eyJleHAiOjE2ODE3MzcwNDEsImlhdCI6MTY4MTcxOTA0MSwianRpIjoiYjU2NTIzYzgtNGM2Yy00M2Q5LThkNTMtYmM5NDQxYmJiODE5IiwiaXNzIjoiaHR0cHM6Ly9zdGFnaW5nLWlkcC5lbnByb3ZlLmJlL2F1dGgvcmVhbG1zL0VucHJvdmUiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNGY4NjliZGEtMGEyOS00ZGVmLWE0ODgtYjI4ZmZmOGU1ZTA4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZW5lbHl6ZXItd2ViYXBwIiwic2Vzc2lvbl9zdGF0ZSI6IjA3ZGU4MGUwLTY3MjgtNDFmMS04MDJmLTY3YjUzOTY1Yjg3MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9zdGFnaW5nLWVuZWx5emVyLmVucHJvdmUuYmUiLCJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJodHRwOi8vbG9jYWxob3N0OjgwODEiLCJodHRwczovL3N0YWdpbmctYWN0aW9ucy5lbnByb3ZlLmJlIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1lbnByb3ZlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiMDdkZTgwZTAtNjcyOC00MWYxLTgwMmYtNjdiNTM5NjViODcxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiam9obiBkb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiI4MDgzNTA2My04MjM4LTRjM2EtODA5MC0wZjE4NGQ1NjY4ZDAiLCJnaXZlbl9uYW1lIjoiam9obiIsImZhbWlseV9uYW1lIjoiZG9lIiwiZW1haWwiOiJqb2huLmRvZUBlbnByb3ZlLmJlIn0.gC79VUq0GV2FJIB4-6iZJDLcB2bPKePoqqTxOYj-7IQ1ZgWfF3tlBGk1h74kG48Ufyc36R2qNA1WlL6VwMNdG3U938M3g94KTi6mtfHpPwsZqfElptLNxN8lUXtqFLqaFeT0vaH7-kUp3LSaKvcHqvsk9HmCPL7V062TVDR_SrH8GdL8GSHJ3wmfIUC9G0rrNQXU3KZK3JBkRaWcLdbd5VQkR6NQrwafdLlSkzI8KnHBI-gweMxoHR-ly1AjZZ4ZzedJ9vSypII_-cNBoHsk0491r7Htm-_34yTosLNJ1uUovwAGuIWym4KKbw19iIRQN44pEpIb2I1x1wLT_jq2xw");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://staging-gateway.enprove.be/v1/organisations/00e28801-3fd2-4841-98cc-9bdcef094774/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//disable facility
var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch("https://staging-gateway.enprove.be/v1/organisations/00e28801-3fd2-4841-98cc-9bdcef094774/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//enable facility
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "position": 0,
  "coordinates": [
    {
      "x": 0,
      "y": 0,
      "width": 10,
      "height": 10
    }
  ],
  "image": {
    "name": "coachhouse",
    "uri": "http://google.com/favicon.ico",
    "imageType": "CUSTOM"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://staging-gateway.enprove.be/v1/organisations/00e28801-3fd2-4841-98cc-9bdcef094774/facilities/1aab41af-e2a0-44dd-9715-b884d0c23e7f/enable", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/