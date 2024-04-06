// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encrptedPassword(){
//     return `${this.password}abc`
//     }
//     changeName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const user=new User("Hanzla","hanzi@gmail.com",92308)
// console.log(user.encrptedPassword());
// console.log(user.changeName());


/** Behind the scene  */

function user1(username,email,password) {
        this.username=username
        this.email=email
        this.password=password
}
user1.prototype.encrptedPassword=function () {
    return `${this.password}abc`
}
user1.prototype.changeName=function () {
    return `${this.username.toUpperCase()}`
}
const user2=new user1("Hanzi","@gmail.com","76543*1%")
console.log(user2.encrptedPassword());
console.log(user2.changeName());
