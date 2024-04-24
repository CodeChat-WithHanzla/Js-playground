const User={
_name:"Hanzla",
_email:"hanzla@gmail.com",
get name(){
return this._name.toUpperCase()
},
set name(value){
    this._name=value
} 
}
const tea=Object.create(User)
console.log(tea.name);