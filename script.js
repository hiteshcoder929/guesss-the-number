let input = document.querySelector(".guess-input")
let feedback = document.querySelector(".feedback-text")
let checkButton = document.querySelector(".btn-primary")
let restart = document.querySelector(".btn-secondary")
let attemptsText = document.querySelector(".attempts-text span")

let userArray = []
let attempts = 5
let randomNumber = Math.floor(Math.random() * 100) + 1
restart.disabled  = true

attemptsText.innerText = attempts

function gameFunction() {
    let userInput = Number(input.value)
    if (attempts > 0) {
        if (userInput != randomNumber) {
            if (userInput > randomNumber) {
                feedback.innerText = "too high"
                input.value = ""
                attempts = attempts - 1
            } else if (userInput < randomNumber) {
                feedback.innerText = "too low"
                input.value = ""
                attempts--
            }
            attemptsText.innerText = `${attempts}`
            userArray.push(userInput)
        } else if (userInput === randomNumber) {
            feedback.innerText = `you guess the right number ${randomNumber}`
            input.readOnly = true
            input.value = ""
            attemptsText.innerText = `${attempts}`
            checkButton.disabled = true
            restart.disabled = false
        }
    } else {
        feedback.innerText = `game over number is ${randomNumber}`
        input.readOnly = true
        input.value = ""
        attemptsText.innerText = `${attempts}`
        checkButton.disabled = true
        restart.disabled = false
    }
}

checkButton.addEventListener('click', () => {
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
})