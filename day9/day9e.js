//sep 01:
var request=new XMLHttpRequest();
//step 02:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//step 03:
request.send();
//step 04:
request.onload=function(){
var data=JSON.parse(request.response);
//console.log(data);
var res=data.filter((data)=>data.currencies && data.currencies[0].code==="USD");
var Currency=res.map((data)=>data.name);
console.log(Currency);

}