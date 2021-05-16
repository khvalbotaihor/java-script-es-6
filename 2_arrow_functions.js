/*
function sum(a, b) {
    return a + b
}

function cube(a) {
    return a ** 3
}
let a = sum(2,3)
let b = cube(3)
console.log({a, b})*/
const sum = (a,b) => a + b
const cube = a => a ** 3

// console.log(sum(2,3))
// console.log(cube(3))

setTimeout(() => {
    console.log("After 1 second")
},1000)