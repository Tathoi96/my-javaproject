var myLocation= document.querySelector(".location-div");
 
var p1= myLocation.children[0];
 p1.textContent=location.href;
 
var p2= myLocation.children[1];
 p2.textContent=location.protocol;
 
var p3= myLocation.children[2];
 p3.textContent=location.hostname;
 
var p4= myLocation.children[3];
 p4.textContent=location.port;
 
var p5= myLocation.children[4];
 p5.textContent=location.pathname;

 const visitBtn=document.getElementById("visit-button") ;
 visitBtn.addEventListener("click",function(){
location.assign("https://www.Google.com");
 });
 