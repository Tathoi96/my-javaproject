
var numofwon = 0;
var numoflost = 0;

for (var i = 1; i <= 5; i++) {

    var guessNumber = parseInt(prompt("Enter number 1 to 5 : "));
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if (guessNumber == randomNumber) {
        console.log("You have won");
        numofwon++;
    }
    else {
        console.log("You have lost. Result is : " + randomNumber);
        numoflost++;
    }

}
document.write("Total won time's : "+numofwon+"<br/>");
document.write("Total lost time's : "+numoflost+"<br/>");