const lan=["Cpp","Js","Py","Rust","Golang"]
const an=lan.forEach((val)=>{
    return val
})
//console.log(an); Output: "undefined"

const num=[1,2,3,4,5,6,7,8,9,10]
//let numbers=num.filter((val)=>val>4)
// if {} then return must be used,otherwise not 
//console.log(numbers);

const arrayOfBooks=[{title:'Rich Dad Poor Dad',genre:'Finance',edition:2006},{title:'Mughal-e-Azam',genre:'History',edition:2024},{title:'How to learn ',genre:'Education',edition:2016}]
let book=arrayOfBooks.filter((bk)=>bk.title==='Mughal-e-Azam')
book=arrayOfBooks.filter((bk)=>bk.edition===2024 &&  bk.title==='Mughal-e-Azam') 
//console.log(book);

let numbers=num
.map((num)=>num*10)
.map((num)=>num++)
.filter((num)=>num>34)
//console.log(numbers);
let initailNum=0
const num1=num.reduce((accum,current)=>accum+current,0)
//console.log(num1);


const arrayofCourses=[
    {
    CourseName:'JS',
    Price:8000 },
    {
        CourseName:'PY',
        Price:6000 },
        {
            CourseName:'Data-Science',
            Price:10000 },
]
const priceToPay=arrayofCourses.reduce((acc,items)=>(acc+items.Price),0)
console.log(priceToPay);


