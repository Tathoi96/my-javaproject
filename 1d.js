function lowestScore(scores){

var min=scores[0];
for(x=1;x<scores.length;x++){
    if(min>scores[x]){
    min=scores[x];

    }
}
return min;

}
var scores=[21,28,1,88,15];


var minScore=lowestScore(scores);
console.log(minScore);