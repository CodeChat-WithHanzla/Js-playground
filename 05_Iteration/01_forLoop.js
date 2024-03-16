for (let i = 1; i <= 10; i++) {
    console.log(`Outer iteration# ${i}`);
    for (let j = 1; j <= 10; j++) {
    //console.log(`Inner Iteration# ${j} and Outer Iteration ${i}`);   
    //console.log(`${i} * ${j} = ${i*j}`);
}
}
// Continue and break
for (let index = 1; index <=10; index++) {
    if(index==5){
        console.log("5 detected and continue is used here");
    }
    else if(index==7){
    console.log("7 Detected and break is used here")
    break
    }
     
    console.log(index);
    
}