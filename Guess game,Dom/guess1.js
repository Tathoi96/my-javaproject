/*--------------making a gussing game----------------------------*/
var numOfwon = 0;
var numOflost = 0;

//for loop function
for(var i=1; i <= 6; i++){

//user give input here
var guessNum = parseInt(prompt("Guees a number 1 to 6 :"));
var random = Math.floor(Math.random()*6)+1;
console.log(random);

//making a condition 
if(guessNum == random ){
    alert("you won this time !");
    numOfwon++; 
}
else{
        alert("sorry you lost this time try again ");
        numOflost++;
}
}
  alert("Cheak Your Result")/*----------finishing alert--------------*/

  //result output showing

document.write("you won time = " +numOfwon +"<br>"); /*--------------total wining time -----------------*/
document.write("you lost time = " +numOflost +"<br>"); /*--------------total loasing time -----------------*/

//final result condition cheak
if(numOfwon >  numOflost){
    document.write("<h1>Cngratulatoin's You Won Our Prize's !<h1>");
}
else{
        document.write("<h1>Sorry! You Lost Our Prizes<h1>");
}