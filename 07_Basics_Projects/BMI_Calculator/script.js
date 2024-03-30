const form=document.querySelector('form')
    form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector('.height').value)
    const weight=parseInt(document.querySelector('.weight').value)
    const age=parseInt(document.querySelector('.age').value)
    const result=document.querySelector('.result')
    if(height==='' || height<=0 || isNaN(height)){
        result.innerHTML="Please give a valid Height"
        result.style.backgroundColor="red"
    }
    else if(weight==='' || weight<=0 || isNaN(weight)){
        result.innerHTML="Please give a valid Weight"
        result.style.backgroundColor="red"
    }
    else if(age==='' || age<=0 || isNaN(age)){
        result.innerHTML="Please give a valid Age"
        result.style.backgroundColor="red"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        
        if (bmi<18.5) {
            result.innerHTML=` BMI = <span>${bmi}kg/m^2 (Falls within the underweight range). </span>`
        }
        else if (bmi<20) {
            result.innerHTML=` BMI = <span>${bmi}kg/m^2 (Falls within the healthy weight range). </span>`
        }
        else if (bmi<30) {
            result.innerHTML=` BMI = <span>${bmi}kg/m^2 (Falls within the overweight range). </span>`
        }
        else if (bmi>30) {
            result.innerHTML=` BMI = <span>${bmi}kg/m^2 (Falls within the obesity range). </span>`
        }

        result.style.backgroundColor="seagreen"
    }
    })