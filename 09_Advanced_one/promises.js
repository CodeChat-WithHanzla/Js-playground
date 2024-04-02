const promiseOne=new Promise(function(resolve,reject) {
   //Do an async task
   // DB calls, cryptography, network
   setTimeout(()=>{
    console.log("Async Task");
    resolve()
   },1000)
})
promiseOne.then(()=>{
    console.log("Promise consumed");

})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve();
    },1000)
    
    
}).then(()=>{
    console.log("Async Task 2 resolved");
})

const promisethree=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({userName:'hanzla',email:'hanzla@examplegmail.com'})
    }, 1000);
})

promisethree.then((user)=>{
    console.log(user);
})

const promisefour=new Promise((resolve,reject)=>{
    setTimeout(() => {
       let error=false
       if(!error){
       resolve({userName:"Ibrahaim",age:'6'})
       }
       else{
        reject('ERROR : Something went wrong ! ')
       }

    }, 1000);
})

promisefour.then((user)=>{
    //console.log(user.userName);
    return user.userName;
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
console.log(error);
})
.finally(()=> console.log("Promise executed!"))


const promisefive=new Promise((resolve,reject)=>{
    setTimeout(() => {
       let error=true
       if(!error){
       resolve({userName:"Js",age:'40'})
       }
       else{
        reject('ERROR : JS went wrong ! ')
       }

    }, 1000);
})

async function consumedPromiseFive() {
    try {
        const response=await promisefive  
        console.log(response); 
    } catch (error) {
       console.log(error); 
    } 
}
consumedPromiseFive()

// async function getAllUsers() {
//     try {
//         const responce=await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(responce);
//          const data=await responce.json()
//          console.log(data); 
//     } catch (error) {
//         console.log("ERROR : ",error);
//     }   
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("ERROR: ",error);
})