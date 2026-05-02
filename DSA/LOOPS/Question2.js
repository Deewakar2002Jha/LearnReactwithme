//sum of n natural number
let n = Number(prompt("enter the number"));

if(isNaN(n)){
    console.log("invalid number")
}
else{
    if(n > 0){
        let sum = 0;
        for(let i = 1; i<=n; i++){
            sum = sum + i;
        }
        console.log("sum of natural number" + " " + sum)
    }
    else{
        console.log("number should be +ve and more 0")
    }
}