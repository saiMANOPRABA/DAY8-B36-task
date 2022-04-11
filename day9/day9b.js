//sep 01:
var request=new XMLHttpRequest();
//step 02:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//step 03:
request.send();
//step 04:
request.onload=function(){
var data=JSON.parse(request.response);
let res=data.filter((element)=>element.population<=200000)
console.log(res)
for(i=0;i<res.length;i++)
{
console.log(res[i].name)
}
}
