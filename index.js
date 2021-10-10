//for IIFEs

(function add(num1, num2) {
    
    console.log(num1 + num2);
})(20,20);

// function expression
var add2=function add(sum1, sum2)
 {console.log(sum1 + sum2);}
 add2(20,30);

 var country1=["x","y"];
 var country2=["z","a"];
 var country=country1.concat(country2);
 console.log(country);

var names=["x","y","z","a","e"];
names.splice(2,1,"b","c");
console.log(names);