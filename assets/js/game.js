const form =  document.querySelector('.quiz-box')
const answers = Array.from(document.querySelectorAll('.answer'))
const allQuestions = Array.from(document.getElementsByClassName('question'))

let score = 0
// answers check //
const handleQuiz = (e) => {
    const checkedAnswers = answers.filter(answer => answer.checked)
    const isTrue = checkedAnswers.every(answer => answer.value === 'true')
    const correctCount = checkedAnswers.filter(answer => answer.value === 'true').length
    const allChecked = checkedAnswers.length === allQuestions.length

    e.preventDefault();

    
    
    

    if(!allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Please Select All Answers'
    
    }

    checkedAnswers.forEach(answer => {
        const checkIfcorrect = answer.value === 'true'
        const answerBox = answer.closest('.answer-box')

        if (checkIfcorrect) {
            answerBox.classList.add('correct')
            answerBox.classList.remove('incorrect')
        } else {
            answerBox.classList.add('incorrect')
            answerBox.classList.remove('correct')
        }
    })

    if(isTrue && allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Congratulations!!👍 All Answers Are Correct!!🥳'
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