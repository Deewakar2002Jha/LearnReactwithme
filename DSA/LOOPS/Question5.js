//check wherther the number is prime or not ?my loop → O(n/2)
let pr = prompt("enter the number");

if (pr === null) {
    console.log("operation is cancelled");
} 
else {

    let n = Number(pr);

    if (isNaN(n)) {
        console.log("invalid number");
    } 
    else {

        if (n > 1) {

            let primehai = true;

            for (let i = 2; i <= Math.floor(n / 2); i++) {

                if (n % i === 0) {
                    primehai = false;
                    break;
                }
            }

            console.log(primehai);

        } 
        else {
            console.log("number should be greater than 1");
        }
    }
}
//another way with time complexity is o(squareroot2);
let n = +prompt("Enter a number"), prime = n > 1;

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        prime = false;
        break;
    }
}

console.log(prime);