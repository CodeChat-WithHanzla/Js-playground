const name="Hanzla"
const age=19
console.log(name+" "+ age)//old aproach 
console.log(`MySelf  ${name} and Im ${age} years of age`);
const Webname=new String("Velocity.pk is the Officail web app")
// Different String Methods
console.log(Webname.length)//Tell us About the length of a String
console.log(Webname.charAt(6))//Tell us About the Character at some index 
console.log(Webname.indexOf("t"))//Tell us the Index of a char
console.log(Webname.toLowerCase())//Convert all letters to Lower Case
console.log(Webname.toUpperCase())//Convert all letters to Upper case
console.log(Webname.replace("Velocity","Hanzla"))//Replace Velocity with Hanzla
console.log(Webname.includes("Velocity"))//Search and then return a boolean value
console.log(Webname.charCodeAt(24))//Return Unicode of given index(starting from 0)
console.log(Webname.concat(" how are you bro"))//Concat two String
const newstring = Webname.substring(0,4)
console.log(newstring)//SubString doesnt take neg values if given it`ll treat it like 0 index
const nameofBrand=new String("HANZLAhcc")
console.log(nameofBrand.slice(-9,4))
const anotherstring="   Hanzla   khalid "
console.log(anotherstring.trim())/* 
Will it ignore extra whitespaces between two words in the string?
No, the trim() method in JavaScript only removes leading and trailing whitespaces from a string, not whitespaces between words.
*/
const str1="Hanzla-Huzaifa-Khuzaima"
console.log(str1.split("-"));