const user={
    name:"Hanzla",
    id:"6481",
    welcome: function () {
        console.log(`${this.name} , Welcome to website`);
        //console.log(this);//this refer to the current case
    }
}
user.welcome()
user.name="Huzaifa"
user.welcome()
console.log(this);// {} in node environ.. and window in browser

function check () {
        let name="Hazzy"
        console.log(this.name);//undefined 
    }
check()

const add=(a,b)=>{
return a+b
}
console.log(add(3,9));

const add1=(a,b)=>(a+b)
console.log(add1(2,3));
// NOTE: (Return not allowed) and {return can be use}
