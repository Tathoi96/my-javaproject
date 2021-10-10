for(var i=0;i<3;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){

        var text=this.innerHTML;
        console.log(text);
        myAudio(text);
        myAnimation(text);
});}



function myAudio(text){

switch(text){
case "a":
    var audio =new Audio("audios/a.mp3");
    audio.play();
    break;
case "b":
    var audio =new Audio("audios/b.mp3");
    audio.play();
    break;
case "c":
    var audio =new Audio("audios/c.mp3");
    audio.play();
    break;

}
}

document.addEventListener("keypress",function(event)
{
var text=event.key;
myAudio(text);
myAnimation(text);
});



function myAnimation(text)
{

var selectBtn= document.querySelector("."+text);
selectBtn.classList.add("anim");
setTimeout(function(){
    selectBtn.classList.remove("anim");
},1000);

}