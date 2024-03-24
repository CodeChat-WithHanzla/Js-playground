const buttons=document.querySelectorAll(".box")
const body=document.querySelector("body")
buttons.forEach(function(btn){
    //console.log(btn);
    btn.addEventListener('click',(e)=>{
     //console.log(e);
   //console.log(e.target.id);
   if (e.target.id==='hotpink') {
    body.style.backgroundColor=e.target.id
   }
   else if (e.target.id==='darkblue') {
    body.style.backgroundColor=e.target.id
   }
   else if (e.target.id==='seagreen') {
    body.style.backgroundColor=e.target.id
   }
   else if (e.target.id==='indianred') {
    body.style.backgroundColor=e.target.id
   }
    })
})