export function addition(){//by adding export keyword before function name, we can make this function available for import in other modules
    let a: number = 10;
    let b: number = 20;
    let sum: number = a + b;
    console.log("The sum of a and b is: " + sum);
}

function multiplication(a: number, b: number, c: number = 0): number {//c is an optional parameter with a default value of 0, its temparary solution to avoid error when multiplication is called with only two arguments
    return a * b * c;
}

multiplication(5, 10, 2); // This will return 100 (5 * 10 * 2)

let result: number = multiplication(5, 10);//or let result = multiplication(5, 10);
console.log("The product of 5 and 10 is: " + result);
//multiplication function withoout arg will have error because it 
// requires two parameters of type number, unless you provide default 
// values for the parameters or make them optional. For example:
function multiplication1(a: number = 1, b: number = 1): number {
    return a * b;
}
multiplication1(); // This will return 1, as both a and b default to 1

function greet(name: string): void {
    console.log("Hello, " + name + "!");
}