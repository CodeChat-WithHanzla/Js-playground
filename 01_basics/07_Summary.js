/* PRIMITIVE DATA TYPES (Non-referance type)
 There are 7 Primitive data type
Number,String,Boolean,Null,Undefined,Symbol,BigInt */
let number=293598
console.log(typeof number);
let string="Hanzla"
console.log(typeof string);
let bool=true
console.log(typeof bool);
let NullValue=null
console.log(NullValue);
let undefinedValue;
console.log(typeof undefinedValue);
let symbolValue=Symbol("hanzla@git")
console.log(typeof symbolValue);
let bigIntValue=12345678900987654321n
console.log(typeof bigIntValue);
/* Non-Primitive(Referance Type Variables)
There are 3 non-primitive data types 
Array,Object,Function
Note: There return type is Object mainly,but when you check typeof a function => function will be return(Although its object function) */
const array=["Hanzla",19,"Student"]
console.log(typeof array);
const obj={
    name:"Abu Hanzla",
    age:19,
    student:true
}
console.log(typeof obj);
const fun=function(){
    console.log("My name is Hanzla");
}
console.log(typeof fun);// Output will be Function
// https://262.ecma-international.org/5.1/#sec-11.4.3