/** Object Literal**/ 

// const user={
//     name:"Hanzla",
//     StudentId:"23006481",
//     Program:"Computer Science",
//     getuser:function(){
//     // console.log("Got user detail from Data base");
//     // console.log(`UserName : ${this.name}`);
//     console.log(this);
//     return 0
//     }
    
// }

// console.log(user.name);
// console.log(user.getuser());
// console.log(this);

function user(name,StudentId,Program) {
    this.name=name;
    this.StudentId=StudentId;
    this.Program=Program;
    return this;
}
const user1=new user("Ali","2300899999","Computer Engg")
const user2=new user("Muhammad Abbas","45667","Electrical engg")
console.log(user1);

// When the function is called with new keyword ,the function will be used as a contructor,new will to this things
// 1-- Create a blank plane Javascript object.For convenience,lets call it newInstance
//  2-- If the constructor function has a prototype that is an Object, the instance inherits properties and methods from that object.
// If the constructor function's prototype is not an Object, the instance inherits properties and methods from the default Object.prototype.


