/* 
Scope is actually curly braces {}
if(1){
let a=10
const b=20
var c=30
}
console.log(a);//a is not defined 
console.log(b);//b is not defined
console.log(c);//30
//So var isnt going to follow the scope {}

*/

let a=10
if(1){
    let a=20
    console.log(`Inner ${a}`);
}
console.log(`Outer ${a}`);

// becoz of scope problems we dont use var usually