function answerSubmit() {

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