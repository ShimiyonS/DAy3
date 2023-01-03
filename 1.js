let jsonData = [{
    "Name" : "Shimiyon", 
    "place"   :"Coimbatore",
    "DOB" : "08-12-1997",
},
{
    "Name" : "Samuvel", 
    "place"   :"Coimbatore",
    "DOB" : "14-01-1975",
}];


console.log("for loop");

for(let i=0;i<jsonData.length;i++){
    let Data = jsonData[i];
    console.log(Data);
}

console.log("for in"); 


for (var key in jsonData ){
    console.log(jsonData[key]);
}

console.log("for off");

for (var index of jsonData){
    console.log(index);
}



console.log('for Each');

jsonData.forEach(myfunction)
function myfunction(item){
    console.log(item);
}