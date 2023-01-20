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
    
// return statement //
    if(!allChecked) {
    incompleteQuiz()
    return
    }

    setAnswerStyle(checkedAnswers)
    
    if (isTrue && allChecked) {
        winQuiz();
    } else {
        loseQuiz(correctCount);
    }
}

const incompleteQuiz = () => {
    Swal.fire ({
        position: 'center',
        icon: 'info',
        title: 'You didn\'t answer all the questions',
        showConfirmButton: false,
        timer: 3000
    })
}

const winQuiz = () => {
    Swal.fire ({
        position: 'center',
        icon: 'success',
        title: 'You win! Congratulations!',
        showConfirmButton: false,
        timer: 3000
    })
}

const loseQuiz = (count) => {
    Swal.fire ({
        position: 'center',
        icon: 'error',
        title: 'Sorry, You lose! You got '+ count +' correct answers',
        showConfirmButton: false,
        timer: 3000
    })
}

const setAnswerStyle = (answers) => {
    answers.forEach(answer => {
        const checkIfcorrect = answer.value === 'true'
        const answerBox = answer.closest('answer-box')
        console.log(answerBox);

        if (checkIfcorrect) {
            answerBox.classList.add('correct')
            answerBox.classList.remove('incorrect')
        } else {
            answerBox.classList.add('incorrect')
            answerBox.classList.remove('correct')
        }
    })
}

form.addEventListener('submit', handleQuiz)