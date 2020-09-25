// ********* VERBS WITH UP **************

function answerSubmitUp() {

    let upCount = 0

    let answerUpOne = document.getElementById("up-one").value
    let tickUpOne = document.getElementById("tick-up-one")
    let closeUpOne = document.getElementById("close-up-one")

    // Up Answer One Grows Up

    if (answerUpOne === "grows up") {
        tickUpOne.src = "../assets/images/green-tick.png";
        closeUpOne.style.display= "none"
        upCount ++;
    } else if (answerUpOne === "grow up") {
        closeUpOne.innerHTML ="  Close! Hint: the subject is third person"
    }
    else {
        tickUpOne.src = "../assets/images/incorrect-x.png"
    }

      // Up Answer Two Showed Up

    let answerUpTwo = document.getElementById("up-two").value
    let tickUpTwo = document.getElementById("tick-up-two")
    let closeUpTwo = document.getElementById("close-up-two")

    if (answerUpTwo === "showed up") {
        tickUpTwo.src = "../assets/images/green-tick.png";
        closeUpTwo.style.display= "none"
        upCount ++;
    } else if (answerUpTwo === "show up" || answerUpTwo == "shows up") {
        closeUpTwo.innerHTML ="  Close! Hint: The time is past"
    }
    else {
        tickUpTwo.src = "../assets/images/incorrect-x.png"
    }

    // Up Answer Three Give Up 

    let answerUpThree = document.getElementById("up-three").value
    let tickUpThree = document.getElementById("tick-up-three")

    if (answerUpThree === "give up") {
        tickUpThree.src = "../assets/images/green-tick.png";
        upCount ++;
    } else {
        tickUpThree.src = "../assets/images/incorrect-x.png"
    }

    // Up Answer Four Look Up

    let answerUpFour = document.getElementById("up-four").value
    let tickUpFour = document.getElementById("tick-up-four")

    if (answerUpFour === "look up") {
        tickUpFour.src = "../assets/images/green-tick.png";
        upCount ++;
    } else {
        tickUpFour.src = "../assets/images/incorrect-x.png"
    }

   // Up Answer Five Take Up

    let answerUpFive = document.getElementById("up-five").value
    let tickUpFive = document.getElementById("tick-up-five")
    let closeUpFive = document.getElementById("close-up-five")

    if (answerUpFive === "Taking up" || answerUpFive === "taking up") {
        tickUpFive.src = "../assets/images/green-tick.png";
        closeUpFive.style.display= "none"
        upCount ++;
    } else if (answerUpFive === "Take up" || answerUpFive == "To take up" || answerUpFive === "take up" || answerUpFive === " to take up") {
        closeUpFive.innerHTML ="  Close! Hint: Verb is gerund(ing) form"
    }
    else {
        tickUpFive.src = "../assets/images/incorrect-x.png"
    }

    // Up Answer Six Set Up

    let answerUpSix = document.getElementById("up-six").value
    let tickUpSix = document.getElementById("tick-up-six")
   
    if (answerUpSix === "set up") {
        tickUpSix.src = "../assets/images/green-tick.png";
        upCount ++;
    } else {
        tickUpSix.src = "../assets/images/incorrect-x.png"
    }

    // Counting up Score Verbs with Up
    
    let marksUp = document.getElementById("marksUp")
    
    if (upCount === 6) {
        marksUp.innerHTML = "Well done! You scored "+ upCount + " out of 6. On to the next excercise!"
    }
    else if (upCount === 5 || upCount === 4) {
        marksUp.innerHTML = "Almost there! You scored "+ upCount + " out of 6. Try again"
    }
    else if (upCount === 3 || upCount === 2) {
        marksUp.innerHTML = "Not great! You scored "+ upCount + " out of 6. Keep trying"
    }
    else if (upCount === 1 || upCount === 0) {
        marksUp.innerHTML = "Poor effort! You scored "+ upCount + " out of 6. Keep trying"
    }
    else {console.log(upCount)}
}


// ********* VERBS WITH DOWN **************

function answerSubmitDown() {

    downScore = 0

    // Down Answer One 

    let answerDownOne = document.getElementById("down-one").value
    let tickDownOne = document.getElementById("tick-down-one")

    if (answerDownOne === "Who will write down the main points of the meeting?") {
        tickDownOne.src = "../assets/images/green-tick.png";
        downScore++
        console.log(downScore)
    } else {
        tickDownOne.src = "../assets/images/incorrect-x.png"
    }

    // Down Answer Two 

    let answerDownTwo = document.getElementById("down-two").value
    let tickDownTwo = document.getElementById("tick-down-two")

    if (answerDownTwo === "When did the school close down?") {
        tickDownTwo.src = "../assets/images/green-tick.png";
        downScore++
        console.log(downScore)
    } else {
        tickDownTwo.src = "../assets/images/incorrect-x.png"
    }

    // Down Answer Three 

    let answerDownThree = document.getElementById("down-three").value
    let tickDownThree = document.getElementById("tick-down-three")

    if (answerDownThree === "Why did Lisa turn down their job offer?" ||
        answerDownThree === "Why did Lisa turn down the job offer?") 
        {
        tickDownThree.src = "../assets/images/green-tick.png";
        downScore++
        console.log(downScore)
    } else {
        tickDownThree.src = "../assets/images/incorrect-x.png"
    }
   
    // Down Answer Four

    let answerDownFour = document.getElementById("down-four").value
    let tickDownFour = document.getElementById("tick-down-four")

    if (answerDownFour === "How many times has your car broken down this year?" ||
        answerDownFour === "How often has your car broken down this year?" ||
        answerDownFour === "How many time has my car broken down this year?" ||
        answerDownFour === "How often has my car broken down this year?")
        {
        tickDownFour.src = "../assets/images/green-tick.png";
        downScore++
        console.log(downScore++)
    } else {
        tickDownFour.src = "../assets/images/incorrect-x.png"
    }

    // Down Answer Five

    let answerDownFive = document.getElementById("down-five").value
    let tickDownFive = document.getElementById("tick-down-five")

    if (answerDownFive === "How much did oil prices go down last week?" ||
        answerDownFive === "What percentage did oil prices go down last week?") {
        tickDownFive.src = "../assets/images/green-tick.png";
        downScore++
        console.log(downScore)
    } else {
        tickDownFive.src = "../assets/images/incorrect-x.png"
    }

    // Down Answer Six

    let answerDownSix = document.getElementById("down-six").value
    let tickDownSix = document.getElementById("tick-down-six")

    if (answerDownSix === "What has Paul cut down on?" ||
        answerDownSix === "What has Paul cut down on?") 
        {
        tickDownSix.src = "../assets/images/green-tick.png";
        downScore++
        console.log(downScore)
    } else {
        tickDownSix.src = "../assets/images/incorrect-x.png"
    }
}
