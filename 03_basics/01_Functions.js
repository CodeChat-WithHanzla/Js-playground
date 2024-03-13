function add(a,b){
    console.log(a+b);
}
console.log("Result : "+ add(4,7));//Output will be :  Result :Undefined
function addNum(a,b){
    return a+b
    console.log("How are you?");// Nothing will execute after return 
}
console.log("Result : "+ addNum(4,7));//Now addNum(a,b) will return a value 


function isLogIn(username="HAZZY"){
    if(!username)
    return `Plz Enter Name`

    return `${username} just looged In!`
}
console.log(isLogIn("HANZLA KHALID "));

