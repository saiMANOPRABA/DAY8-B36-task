//step 01:
var request=new XMLHttpRequest();
//step 02:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//step 03:
request.send();
//step 04:
request.onload=function(){
var data=JSON.parse(request.response);
let final=data.map((element)=>element.population)
let total=final.reduce((sum,cv)=>sum+cv);
console.log(total);
}