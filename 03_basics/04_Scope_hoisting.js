/*
    function one(){
    const name="Hanzla"
    function two(){
        const age=19
        console.log(name);
    }
    two()
    console.log(age);//Age is not defined globally we cant access it outside local scope
}
    one()*/
    
    console.log(addone(6))
    function addone(num){
    return num++ //This type of function can be access before its initialization
    }
    console.log(addtwo(9));//Will throw an error "Cant access before initialization"
    const addtwo=function(num){
        return num+2
    }