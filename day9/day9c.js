//sep 01:
var request=new XMLHttpRequest();
//step 02:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//step 03:
request.send();
//step 04:
request.onload=function(){
var data=JSON.parse(request.response);
data.forEach(element => console.log(element.name));
data.forEach(element => console.log(element.capital));
data.forEach(element => console.log(element.flag));
}