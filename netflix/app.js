// Selectors
const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

// Event Listeners
questions.forEach((question, indexQ) => {
  question.addEventListener('click', () => {
    answers.forEach((answer, indexA) => {
      if (indexQ === indexA) {
        answer.classList.toggle('active')
      } else {
        answer.classList.remove('active')
      }
    })
  })
})
