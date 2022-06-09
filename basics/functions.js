// normal function

function greet(message) {
    console.log(message)
}

greet('Hello from greet!')

// function as an expression

const sum = function (num1, num2) {
    return num1 + num2
}

console.log(sum(10, 20))

// arrow functions

const sub = (num1, num2) => {
    return num1 - num2
}
const mul = (num1, num2) => num1 * num2
const print = name => `Hello ${name}`

console.log(sub(10, 20))
console.log(mul(2, 3))

console.log(print('Allen Green'))