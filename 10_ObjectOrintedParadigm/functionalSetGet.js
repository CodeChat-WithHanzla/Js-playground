function User(name,email){
this.name=name
this.email=email
Object.defineProperty(this,'name',{
    get: function(){
        return `Im ${name} `
    },
    set: function(value){
        this.name=value
    }
})
}

const user=new User("Hanzla","hanzla@gmail.com")
console.log(user.name);