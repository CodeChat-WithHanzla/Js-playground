class User {
    constructor(username){
    this.username=username
    }
    logme(){
        console.log(`Username : ${this.username}`);
    }
}  

class Teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
  }
  addCourse(){
    console.log(`Course was added by ${this.username}`);
  }
}

const object=new Teacher("Hanzla","hanzi@gmail.com",233456)
object.addCourse();

const object2=new User("Chai")
object2.logme();

console.log(object instanceof Teacher);

console.log(object instanceof User);