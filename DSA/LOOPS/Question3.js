// print the sum of factorial

let pr = prompt("Enter the number");

if (pr === null) {
    console.log("cancelled the operation");
} 
else {

    let n = Number(pr);

    if (isNaN(n)) {
        console.log("invalid input");
    } 
    else {

        if (n > 0) {

            let fact = 1;

            for (let i = 1; i <= n; i++) {
                fact = fact * i;
            }

            console.log("factorial is " + fact);

        } 
        else {
            console.log("number should be +ve and more than zero");
        }
    }
}

//another way

let n = Number(prompt("Enter a number"));

if (!isNaN(n) && n > 0) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    console.log("Factorial is:", fact);
} else {
    console.log("Invalid input");
}


//another way time complexity for all is 0(n);
let n = +prompt("Enter a number"), f = 1;

for (let i = 1; i <= n; i++) f *= i;

console.log(n > 0 ? `Factorial is: ${f}` : "Invalid input");