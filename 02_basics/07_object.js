const obj=new Object()//Singleton
console.log(obj);//Empty Object {}
const obj1={}//Non Singleton
console.log(obj1);
obj.id="BSF23006481"
obj.name="Abu Hanzala"
obj.isLoogedIn=false
console.log(obj);

//Nested Object
const obj2={
    email:"hanzzy@gmail.com",
    fullName:{
        userName:{
            firstName:"Hanzala",
            lastname:"Khalid"
        }
    },
    password:123
}

console.log(obj2.fullName.userName.firstName);

const obj4={a:'1',b:'2'}
const obj5={c:'3',d:'4'}
const obj6={e:'5',f:'6'}
const obj7=Object.assign(obj4,obj5,obj6)// obj4 will be the target,all others will be source
console.log(obj7);
console.log(obj4===obj7);//true,This mean all other source objects are stored in obj4

const objall=Object.assign({},obj4,obj5,obj6)
console.log(obj4===objall);//false,all source objects are stored in empty string

//Spread operator,we`re going to use it 90%
const objfull={...obj4,...obj5,...obj6}
console.log(objfull);

const user=[
    {a:'1'},{b:'2'},{c:'3'}
]
console.log(user[1].b);

console.log(obj);
console.log(Object.keys(obj));//Return Keys
console.log(Object.values(obj));//Return the Values
console.log(Object.entries(obj));//Convert each entry into an array(key:value)

