const form =  document.querySelector('.quiz-box')
const answers = document.querySelectorAll('.answer')

const modal = document.querySelector('.modal')
const modalInfo = modal.querySelector('p')
const modalBtn = modal.querySelector('.close-modal')

const handleQuiz = e => {
    e.preventDefault();

    const checkedAnswers = answers.filter(answer => answer.checked)
    const isTrue = checkedAnswers.evry(answerv=> answer.value ==='true')

    const allChecked = checkedAnswers.length === allQuestions.length

    if (!allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Please Select All Answers'
    }
}

const closeModal = () => {
    modal.classList.remove('modal-active')
}



modalBtn.addEventListener('click', closeModal)
form.addEventListener('submit', handleQuiz)