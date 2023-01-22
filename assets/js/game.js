// elemnts to quiz //
const form = document.querySelector('.quiz-box')
const answers = Array.from(document.querySelectorAll('.answer'))
const allQuestions = document.querySelectorAll('.question')
const modal = document.querySelector('.modal')
const modalInfo = modal.querySelector('p')
const modalBtn = modal.querySelector('.close-modal')

// function button-submit to handle the quiz //
const handleQuiz = e => {
    e.preventDefault();

// check what and if correct answers were picked //
    const checkedAnswers = answers.filter(answer => answer.checked)
    const isTrue = checkedAnswers.every(answer => answer.value === 'true')

// making sure all questions are selected, if not info to select all answers //
    const allChecked = checkedAnswers.length === allQuestions.length
   
    if (!allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Please Select All Answers!'
        return
    }

// if all answers are selected, check if they are correct-chartreuse color or incorrect-crimson color //
    checkedAnswers.forEach(answer => {
        const checkIfCorrect = answer.value === 'true'
        const answerBox = answer.closest('.answer-box')

        if (checkIfCorrect) {
            answerBox.classList.add('correct')
            answerBox.classList.remove('incorrect')
        } else {
            answerBox.classList.add('incorrect')
            answerBox.classList.remove('correct')
        }
    })

// depending on correct or incorrect answers result congratulations or sorry //
    if (isTrue && allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Congratulations!!👍 All Answers Are Correct🥳'
    } else {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Sorry,👎 You Loose 😬'
    }

}

const closeModal = () => {
    modal.classList.remove('modal-active')
}

modalBtn.addEventListener('click', closeModal)
form.addEventListener('submit', handleQuiz)
