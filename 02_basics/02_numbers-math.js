/* ++++++++++ NUMBERS +++++++++++ */

const num=new Number(900.9855)
const num1=new Number(1000000)
console.log(num);
//Number methods usually return a string
console.log(num.toPrecision(3));
console.log(num1.toLocaleString());
console.log(num.toFixed(2));

/*  ++++++++++ MATH ++++++++++ */

console.log(Math);
//Some Mathematical constants
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.E);
//Some Mathematical Functions
console.log(Math.abs(-5));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
console.log(Math.round(6.8));
console.log(Math.min(8,9,4,5,2));
console.log(Math.max(20,34,56,78));
// Math.random 0=>1
console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));
const max=10
const min=20
console.log(Math.floor((Math.random()*(max-min+1))+min));