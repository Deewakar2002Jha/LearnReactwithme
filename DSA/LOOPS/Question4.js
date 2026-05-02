//print the factor of the number
let pr = prompt("enter the number");

if(pr === null){
    console.log("operation is cancled");
}
else{
    let n =Number(pr);
    if(isNaN(n)){
        console.log("invaild number");
    }
    else{
        if(n > 0){
            for(let i =1; i<=Math.floor(n/2); i++){
                if(n%i === 0){
                    console.log(i)
                }
            }
            console.log(n)
        }
        else{
            console.log("number should be +ve and more then zero")
        }
    }
}

// another way  with time complexity of o(n);
/*
prompt() takes input from the user.
+ converts the input string into a number.

Example:

Input: "12"
Stored in n: 12
*/
let n = +prompt("Enter a number");

if (n > 0) {
    for (let i = 1; i <= n; i++)
        if (n % i === 0) console.log(i);
} else {
    console.log("Invalid input");
}

// another way  with time complexity of o(squreroot(n));
let n = +prompt("Enter a number");

if (n > 0) {
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(i);
            if (i !== n / i) console.log(n / i);
        }
    }
} else {
    console.log("Invalid input");
}
