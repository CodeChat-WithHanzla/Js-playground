const descriptor= Object.getOwnPropertyDescriptor(Math,'PI')
//console.log(descriptor);
// console.log(Math.PI);
// Math.PI=4
// console.log(Math.PI);

const obj={
    name:"Hanzla",
    program:"BSCS",
    age:19,
    cal:()=>{
        console.log("Code Phat gya samjo");
    }
}

// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

Object.defineProperty(obj,'name',{
    writable:false,
    enumerable:false
})
obj.name="Khuzaima"
console.log(obj.name);

// console.log(Object.getOwnPropertyDescriptor(obj,'name')
// );
//     for (const key in obj) {
//     console.log(`${key} : ${obj[key]}`);
//   }
   
   for (const [key,value] of Object.entries(obj)) {
    if (typeof value!=='function') {
        console.log(`${key} : ${value}`);  
    }
    
   }
      