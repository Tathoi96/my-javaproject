function highestRunScore(scores){

    var max1=scores[0][0];
    var max2=scores[0][1];

    for(x=1;x<scores.length;x++){
       
        if(max2<scores[x][1])
            {
            max2=scores[x][1];
            max1=scores[x][0];
        }
        
    
        
    
    }
    return max1;
    
    }
    var scores=[["jamal",21],["kamal",28],["damal",1],["namal",88],["mamal",45]];
    
    
    var name=highestRunScore(scores);
    console.log(name);