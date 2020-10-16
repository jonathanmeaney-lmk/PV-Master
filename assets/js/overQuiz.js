const quizQuestions = [
    
    {
        question: "The report has some errors. We need to:",
        answers: [
            { text: "look over it", correct: true },
            { text: "get over it", correct: false },
            { text: "go into it", correct: false },
        ],
    },

    {
        question: "You don't like her offer. What will yo do?",
        answers: [
            { text: "boil over it", correct: true },
            { text: "turn it down", correct: false },
            { text: "get into it", correct: false },
        ],
    },

    {
        question: "When the boss resigns, a new director will ..... his role:",
        answers: [
            { text: "show up", correct: true },
            { text: "take over", correct: false },
            { text: "close down", correct: false },
        ],
    },

]

let quizQuestion = document.getElementById("quiz-question")
let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")
let optionThree = document.getElementById("option-three")

function showQuestion() {
    quizQuestion.innerHTML = quizQuestions[0].question
    optionOne.innerHTML = quizQuestions[0].answers[0].text
    optionTwo.innerHTML = quizQuestions[0].answers[1].text
    optionThree.innerHTML = quizQuestions[0].answers[2].text

}