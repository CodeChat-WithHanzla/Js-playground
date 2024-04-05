function Setname(username) {
    this.username=username
}

function userdetail(username,email,password) {
    Setname.call(this,username)
    this.email=email
    this.password=password
}
const user1= new userdetail('Hanzla',"hanzy12@gmail.com","oop")
console.log(user1);