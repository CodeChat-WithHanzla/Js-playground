const multiplyby4= function (num) {
    return num*4
}
console.log(multiplyby4(8));
multiplyby4.power=2; /** Function can be treated as Objects in JavaScript */
console.log(multiplyby4.power);
console.log(multiplyby4.prototype); // {}

function user(UserName,id,score) {
    this.UserName=UserName,
    this.id=id,
    this.score=score
}
user.prototype.increment=function(score){
this.score=score++
}
const obj1=new user('Hanzla',6481,19)
console.log(obj1.score);

    
    
    

