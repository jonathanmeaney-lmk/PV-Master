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
            { text: "boil over it", correct: false },
            { text: "turn it down", correct: true },
            { text: "get into it", correct: false },
        ],
    },

    {
        question: "When the boss resigns, a new director will ..... his role:",
        answers: [
            { text: "close down", correct: false },
            { text: "show up", correct: false },
            { text: "take over", correct: true },
        ],
    },

]

let quizQuestion = document.getElementById("quiz-question")
let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")
let optionThree = document.getElementById("option-three")

let index = 0

window.addEventListener("DOMContentLoaded", function(){
    quizQuestion.innerHTML = quizQuestions[index].question
    optionOne.innerHTML = quizQuestions[index].answers[0].text
    optionTwo.innerHTML = quizQuestions[index].answers[1].text
    optionThree.innerHTML = quizQuestions[index].answers[2].text
});

function optionOneClicked() {
    if (quizQuestions[index].answers[0].correct == true) {
        console.log("correct")
    } else {
        console.log("wrong")
    }

}

function optionTwoClicked() {
    if (quizQuestions[index].answers[1].correct == true) {
        console.log("correct")
    } else {
        console.log("wrong")
    }
}


function optionThreeClicked() {
    if (quizQuestions[index].answers[2].correct == true) {
        console.log("correct")
    } else {
        console.log("wrong")
    }
}


function  incrementIndex() {console.log(index)}


function nextQuestion() {
    index ++;

    incrementIndex()

    if (index === quizQuestions.length) {
        quizQuestion.innerHTML = quizQuestions[0].question
        optionOne.innerHTML = quizQuestions[0].answers[0].text
        optionTwo.innerHTML = quizQuestions[0].answers[1].text
        optionThree.innerHTML = quizQuestions[0].answers[2].text
    } else {
        quizQuestion.innerHTML = quizQuestions[index].question
        optionOne.innerHTML = quizQuestions[index].answers[0].text
        optionTwo.innerHTML = quizQuestions[index].answers[1].text
        optionThree.innerHTML = quizQuestions[index].answers[2].text
    }
}



