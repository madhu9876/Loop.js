var input = require('readline-sync');
var num = input.questionInt('Enter the number');
var i=0
while(i<=5){
    if(num>0){
        console.log("it is postive")
    }
    else if(num<0){
        console.log("it is nagative")
    }
    else if(num==0){
        console.log("zero")
    }
    i++;
}
