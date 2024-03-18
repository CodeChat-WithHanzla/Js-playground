const arr=[1,2,3,4,5]
for (const iterator of arr) {
  //  console.log(iterator);
}
const str="Hello World!"
for (const iterator of str) {
//    console.log(iterator);
}

// Map
const mp=new Map()
mp.set('Pak','Pakistan')
mp.set('Aus','Australia')
mp.set('Eng','England')
mp.set('Nz','New Zealand')

//console.log(mp);
 for (const key in map) {
//console.log(map); map is not iterable in this case
}

//Note key will return full array of keys Although [key] will return only keys 
for (const [Key,value] of mp) {
  //console.log(Key,":- ",value);
    
}
// forof loop doesn`t work on object

// forin loop

const myObject={
    js:"JavaScript",
    py:"Python",
    cpp:"C++",
    R:"Rust"
}
for (const key in myObject) {
//console.log(`Values of ${key} :- ${myObject[key]}`);    
}


const arr1=["Hanzla","Huzaifa","Khuzaima","Ibrahiam"]
arr1.forEach( function (elements){
 // console.log(elements);
});

arr1.forEach((elements)=>{
  //console.log(elements);
});


const test=()=>{console.log("Test 1,2,3");}
//arr1.forEach( test);

arr1.forEach((elements,index,wholeArray)=>{
  //console.log(`Element is ${elements},Index is ${index},Full Array : ${wholeArray}`);
});

const array1=[
  {
    name:"Hanzla",
    rollno:"293598"
  },
  {
    name:"Huzaifa",
    rollno:"Don`t know"
  },
  {
    name:"Khuzaima",
    rollno:"224456"
  }
]
array1.forEach((elements)=>{
//console.log(elements.name);
})