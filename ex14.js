var n=require("readline-sync");
var num =n.questionInt(("enter number: "));
var i=0
while (i<=num){
    if(i%2==0){
        console.log("it is even");
    }
    else{
        console.log("it is odd");
    }
    i++
}

