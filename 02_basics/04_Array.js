const arr=[1,2,3,4,5]
console.log(arr[2]);


const arr1=new Array(1,2,3,4)
console.log(arr1[2]);

// Array Methods 
arr.push(6)//Push a new element in the Array at the end
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(1947)//Insert new element the start of the array
console.log(arr);
arr.shift()//Remove the element at the start of the array
console.log(arr);
console.log(arr.includes(3));//Return boolean values
console.log(arr.indexOf(3));//Return the index of a Array 

const newArr=arr.join("-")//Adds all elements of a array into a string seprated by a separator
console.log(newArr);



// Slice & Splice 

//Slice : Return a copy of an Array 
//        Last index`s element will not be included 

const array=[0,1,2,3,4,5,6]
console.log(`Original Array ${array}`);
const myarr1=array.slice(1,3)
console.log(`Array After slice() ${array}`);



//Splice : Remove Elements from an array 
//          Last index`s will be included
const array1=[0,1,2,3,4,5,6]
console.log(`Original Array ${array1}`);
const myarr2=array1.splice(1,3)
console.log(`Array After splice() ${array1}`);
console.log(myarr2);


