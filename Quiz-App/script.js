const quiz = [
  {
    question: 'What is the most used programming language in 2021?',
    ans1text: 'Java',
    ans2text: 'C',
    ans3text: 'Python',
    ans4text: 'JavaScript',
    answer: 'JavaScript',
  },
  {
    question: 'Who is the President of US?',
    ans1text: 'Joe Biden',
    ans2text: 'Donald Trump',
    ans3text: 'Barack Obama',
    ans4text: 'George Bush',
    answer: 'Donald Trump',
  },
  {
    question: 'What does HTML stand for?',
    ans1text: 'Hypertext Markup Language',
    ans2text: 'Cascading Style Sheet',
    ans3text: 'Jason Object Notation',
    ans4text: 'Helicopters Terminals Motorboats Lamborginis',
    answer: 'Hypertext Markup Language',
  },
  {
    question: 'What year was JavaScript launched?',
    ans1text: '1996',
    ans2text: '1995',
    ans3text: '1994',
    ans4text: 'none of the above',
    answer: '1995',
  },
]

const question = document.getElementById('quiz-question')
const optionA = document.querySelector('.text_option_a')
const optionB = document.querySelector('.text_option_b')
const optionC = document.querySelector('.text_option_c')
const optionD = document.querySelector('.text_option_d')
const submitBtn = document.querySelector('#submit')
const answerElement = document.querySelectorAll('.answer')

let currentQuestion = 0
let score = 0

question.textContent = quiz[currentQuestion].question
optionA.textContent = quiz[currentQuestion].ans1text
optionB.textContent = quiz[currentQuestion].ans2text
optionC.textContent = quiz[currentQuestion].ans3text
optionD.textContent = quiz[currentQuestion].ans4text

submitBtn.addEventListener('click', () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked')
  if (!checkedAns) {
    alert('Please Select an Answer!')
  } else {
    if (
      checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score++
    }

    checkedAns.checked = false
    currentQuestion++

    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question
      optionA.textContent = quiz[currentQuestion].ans1text
      optionB.textContent = quiz[currentQuestion].ans2text
      optionC.textContent = quiz[currentQuestion].ans3text
      optionD.textContent = quiz[currentQuestion].ans4text
    } else {
      alert(`Your Score is ${score} out of ${quiz.length}`)
    }
  }
})
