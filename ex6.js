var i=0
while (i<=100){
    if(i%3==0){
        console.log("nav");
    }
    else if(i%7==0){
        console.log("guru");
    }
    else if(i%3==0 && i%7==0){
        console.log("navgurukul");
    }
    else{
        console.log(i)
    }
        i++

}