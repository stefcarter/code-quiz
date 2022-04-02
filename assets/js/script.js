// var timer = null;
// seconds = 60;
// var timerInt = 0;

// // timer for start of quiz
// renderTimer();
// function renderTimer() {
//      document.querySelector("#timer").textContent = seconds }

// function startTimer() {
//      timerInt = setInterval (
//          function(){(--seconds)
//              renderTimer()
//         }
        
//     ,1000)
// }

//  var startButton =
//  document.querySelector("#start");
//  startButton.addEventListener("click", function(){
//      startTimer()
// })

//  function myStopFunction() {
//     clearInterval(seconds);
// }

// button const/functions/actions
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Sea otters do what while sleeping?',
    answers: [
      { text: 'Hold anothers hand', correct: true },
      { text: 'Wear tiny clam hats', correct: false },
      { text: 'Sleep on a log', correct: false },
      { text: 'Hold anothers tail', correct: false }
    ]
  },
  {
    question: 'Are rats ticklish?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }
    ]
  },
  {
    question: 'Which bird can fly backwards?',
    answers: [
      { text: 'Crow', correct: false },
      { text: 'Hummingbird', correct: true },
      { text: 'American Robin ', correct: false },
      { text: 'Northern Cardinal', correct: false }
    ]
  },
  {
    question: 'Largest giant squid ever measured?',
    answers: [
      { text: '20 feet', correct: false },
      { text: '35 feet', correct: false },
      { text: '43 feet', correct: true },
      { text: '52 feet', correct: false },
    ]
  }
]