const myFamily=["Hanzla","Huzaifa","Khuzaima","Ibrahiam"]
const myFriend=["Wali","Sami","Ajmal","Nameer"]
myFamily.push(myFriend)//push the new element at the end of the array within the same array
console.log(myFamily);//In JS Array can accept any type of value together even another array
console.log(myFamily[4][3]); // Nameer 

const myFamily1=["Hanzla","Huzaifa","Khuzaima","Ibrahiam"]
const myFriend1=["Wali","Sami","Ajmal","Nameer"]
const all=myFamily1.concat(myFriend1)//Concat two arrays and then return a new array
console.log(all);

const all_new=[...myFamily1,...myFriend1]
console.log(all_new);

const another=[12,3,4,5,[2,3,4],[12,[3,5,6,["Hanzla","Huzaifa"]]]]
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_real=another.flat(Infinity)
console.log(another_real);

console.log(Array.isArray("HANZLA"));
console.log(Array.from("HANZLA"));
console.log(Array.from({name:"hanzla"}));//Return empty string 


let value1=100
let value2=200
let value3=300
console.log(Array.of(value1,value2,value3));