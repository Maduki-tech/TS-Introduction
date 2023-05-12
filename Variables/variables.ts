// Part 1: Declaring Variables in JavaScript

// using var
var x = 10;
console.log(x);

// using let
let y = 20;
console.log(y);

// using const
const z = 30;
console.log(z);

// Part 2: Declaring Variables in TypeScript

// using explicit types
let a: number = 1;
let b: string = "hello";
console.log(a);
console.log(b);

// Part 3: Declaring Constants
const PI = 3.14;
console.log(PI);

// Part 4: Variable Scope

// global scope
var globalVar = 1;
console.log("globalVar = " + globalVar);

// function scope
function myFunction() {
  var localVar = 2;
  console.log("localVar = " + localVar);
}
myFunction();

// block scope
if (true) {
  let blockVar = 3;
  console.log("blockVar = " + blockVar);
}

