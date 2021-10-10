function welcomeMessage(){
 var h1= document.createElement("h1");
var name=prompt("Enter your name : ");
var text;
if(name == null || name == '')


{
    text=
    "No name is found";
}else{
    text="Welcome " + name;
}
var textNode=document.createTextNode(text);
h1.appendChild(textNode);
document.body.appendChild(h1);

}
welcomeMessage();