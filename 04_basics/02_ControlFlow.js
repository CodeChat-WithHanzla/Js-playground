// In this file we`re going to learn conditional statements and switch cases
if (1) {
    console.log('how are u boys');
} else{
    console.log("Fine");
}
let month//='jan'
switch (month) {
    case 'jan':
        console.log("Jan");
        break;
    case 'feb':
        console.log("Feb");
        break;
    case 'mar':
        console.log("Mar");
        break;    
    default:
        console.log("Default Value");
        
}
/*
 Falsy values:
 0,-0,BigInt 0n,"",null,undefined,NaN
 NOTE:
 Except all of the above falsy values,others are truthy values
 
 Truthy value:
 "0",'false'," ",[],function(){} 
*/
let emptyArray=[]
if (emptyArray.length===0) {
    console.log('Empty Array');
}
let emptyObject={}
if (Object.keys(emptyObject).length===0) {
    console.log("Empty object");
}

// Nullish Coalescing Operator (??) : null undefined 
let a;
//a=5 ?? 10
//a=null ?? 10
a=undefined ?? 15
console.log(a);


//Ternary Operator
//(condition)? true:false

const price=120
price>80? console.log("Price is greater than 80"):console.log("Price is less than 80")

