let mysym=Symbol()
const obj={
    name:"Hanzla",
    "full Name":"Abu Hanzla",
    rollNo:"23006481",
    email:"Hanzla@gmail.com",
    isloogedIn:false,
    [mysym]:Symbol("mykey1")
}
console.log(obj.email);
console.log(obj["email"]);
console.log(obj["full Name"]);
console.log(typeof obj[mysym]);

obj.email="chatgtp.com"
console.log(obj["email"]);
//Object.freeze(obj);
obj.email="hanzy@gmail.com"
console.log(obj);

obj.fun1=function(){
    console.log(`How are you  ${this["full Name"]}`);
}
console.log(obj.fun1);//FUNCTION CALL BACK
//THIS WILL THROW AN ERRROR BECOZ WE`VE FREEZE YOUR OBJECT SO I`M GOING TO COMMENT THIS FOR EASE (line no.17)
obj.fun1();