class User{
constructor(name,email){
    this.name=name;
    this.email=email
}
get name(){
    return `${this._name.toUpperCase()} assign with u`
}
set name(value){
    this._name=value
}
}
const user= new User("Hanzla","hanzla@gmail.com")
console.log(user.name);