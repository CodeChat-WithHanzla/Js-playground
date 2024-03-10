const date=new Date()
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toDateString());

//typeOf Date is object
console.log(typeof date);
const newdate=new Date(2024,2,10)
console.log(newdate.toDateString());//Index start from 0 
const anotherdate=new Date("10-3-2024")
console.log(anotherdate.toLocaleString());
const mytime = Date.now();
console.log(mytime);
console.log(anotherdate.getTime());
console.log(date.getMonth() +1);//Index Start from 0
console.log(date.getDay());//Sunday is 0 and Saturday is 6
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
const advancedate = date.toLocaleDateString("en-US", options);
console.log(advancedate);


