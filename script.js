let input = document.querySelector(".guess-input")
let feedback = document.querySelector(".feedback-text")
let checkButton = document.querySelector(".btn-primary")
let restart = document.querySelector(".btn-secondary")
let prevGuess = document.querySelector(".prev-guess span")
let attemptsText = document.querySelector(".attempts-text span")
let form = document.querySelector(".game-form")

let userArray = []
let attempts = 5
let randomNumber = Math.floor(Math.random() * 100) + 1
restart.disabled = true
restart.classList.add('hidden')

attemptsText.innerText = attempts

function gameFunction() {
    let userInput = Math.abs(Number(input.value))
    let close = randomNumber - userInput
    if (attempts !== 0) {
        if (userInput != randomNumber) {
            if (close <= 5) {
                feedback.innerText = "very close"
            } else if (userInput > randomNumber) {
                feedback.innerText = "too high"
            } else if (userInput < randomNumber) {
                feedback.innerText = "too low"
            }
            input.value = ""
            attempts--
            attemptsText.innerText = `${attempts}`
            userArray.push(userInput)
        } else if (userInput === randomNumber) {
            feedback.innerText = `you guess the right number ${randomNumber}`
            input.readOnly = true
            input.value = ""
            attemptsText.innerText = `${attempts}`
            checkButton.disabled = true
            restart.disabled = false
            userArray.push(userInput)
            restart.classList.remove('hidden')
        }
    } else if (attempts === 0) {
        feedback.innerText = `game over number is ${randomNumber}`
        input.readOnly = true
        input.value = ""
        attemptsText.innerText = `${attempts}`
        checkButton.disabled = true
        restart.disabled = false
        userArray = []
        restart.classList.remove('hidden')
    }
    prevGuess.innerText = userArray
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    gameFunction()
})

restart.addEventListener('click', () => {
    input.readOnly = false
    attempts = 5
    randomNumber = Math.floor(Math.random() * 100) + 1
    checkButton.disabled = false
    restart.disabled = true
    input.value = ""
    feedback.innerText = `guess the new number`
    attemptsText.innerText = `${attempts}`
    prevGuess.innerText = ""
    userArray = []
    restart.classList.add("hidden")
})

console.log(randomNumber)