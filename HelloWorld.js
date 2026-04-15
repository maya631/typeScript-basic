console.log("Hello, World!");

let num;

num = 42;

console.log(num);
console.log(typeof num);

num = "Now I'm a string!";
console.log(num);
console.log(typeof num);

const PI = 3.14159;
console.log(PI);
console.log(typeof PI);

function sum(a, b) {
    return a + b;
}
let result = sum(); // This will return NaN because both a and b are undefined
result = sum(5, 10);
console.log(`The sum of 5 and 10 is: ${result}`);

result = sum("Hello, ", "World!");
console.log(result);
result = sum(5, " apples");
console.log(result);