class User {
    constructor(username){
    this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}  

const hanzla=new User("Hanzla")
//console.log(hanzla.createId())

class Teacher extends User{
    constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
    }
}

const Ali=new Teacher;
//console.log(Ali.createId());

