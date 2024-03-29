let randomNumber=parseInt(Math.random()*10+1)
console.log(randomNumber);
const submit=document.querySelector('#Submit')
const userInput=document.querySelector('#GuessField')
const guessSlot=document.querySelector('.previous')
const Remaining=document.querySelector('.Remaining')
const lowHigh=document.querySelector('.lowHigh')
const startOver=document.querySelector('.resultParas')
const p=document.createElement("p")

let previousGuess=[]
let numGuess=1
let playGame=true

if (playGame) {
    submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess=parseInt(userInput.value)
    //console.log(guess);
    validateGuess(guess)

    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else if(guess<1 || guess>10){
        alert("Please enter a number between 1-10")
    }
    else{
        previousGuess.push(guess)
        if (guess === randomNumber) {
            displayGuess(guess);
            displayMessage(`You guessed it right`);
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }
}
function checkGuess(guess){
    
     if(guess<randomNumber){
        displayMessage(`Number is Too Low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is Too High`)
    }
    if (numGuess === 4) {
        displayMessage(`Game over ... Random Number was ${randomNumber}`);
        endGame();
    }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++
    Remaining.innerHTML=`Remaining: ${4-numGuess}`
}
function displayMessage(message){
    lowHigh.innerHTML=`<h2>${message}</h2>`

}
function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add("button")
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    startGame()
}
function startGame() {
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
    randomNumber=parseInt(Math.random()*10+1)
    console.log(randomNumber);
    previousGuess=[]
    guessSlot.innerHTML=`Previous Guesses : `
    numGuess=1
    Remaining.innerHTML=`Remaining: ${4-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true    
    })
}
