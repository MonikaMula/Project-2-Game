const form = document.querySelector('.quiz-box')
const answers = Array.from(document.querySelectorAll('.answer'))
const allQuestions = document.querySelectorAll('.question')
const modal = document.querySelector('.modal')
const modalInfo = modal.querySelector('p')
const modalBtn = modal.querySelector('.close-modal')

const handleQuiz = e => {
    e.preventDefault();

    const checkedAnswers = answers.filter(answer => answer.checked)
    const isTrue = checkedAnswers.every(answer => answer.value === 'true')
    const allChecked = checkedAnswers.length === allQuestions.length

    if (!allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Please Select All Answers!'
        return
    }

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
