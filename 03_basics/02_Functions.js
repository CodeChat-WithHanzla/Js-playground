function AddtoCart(val1,val2,...num1){  //first parameter will store in val1,and second in val2 and all others in num1   
    return num1
}
console.log(AddtoCart(300,40,46,67));

function handleObject(anyobject){
    return `${anyobject.name} , ${anyobject.age}`
}
const obj={
    name:"Hanzla",
    age:19
}
console.log(handleObject(obj));

console.log(handleObject({
    name:"Huzaifa",
    age:18
}))


function handleArray(someArray){
    return `Value at 2nd Index is ${someArray[2]}`
}
console.log(handleArray([12,13,14,45,67,89,67]));