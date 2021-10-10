document.querySelector("#btnId").addEventListener("click",function(){
var num=document.querySelector("#textId").value;
try{
if(num<5)
{
throw "input is too low";
}
else if(num>10){
    throw "input is too high";
}
else{
throw num;
}

}
catch(err){console.log(err);}
})