var num = [10,20,30,40,50,60]
i=0
max=0
sec=0
while (i<num.length){
    if (num[i]>max){
        sec=max
        max=num[i]
    }else if (sec<num[i] && num[i]<max){
        sec=num[i]
    }i++
}
console.log(sec)
