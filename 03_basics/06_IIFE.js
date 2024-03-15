(function check () {
    // Named IIFE
    console.log("Hello Everyone");
})();//Bcoz of problems with global scope we can use Immediately Invoked Function Expression
((name)=>{
    // Simple IIFE
    console.log(`${name} , How are you ?`);
})('Hanzla')