// ********* VERBS WITH UP **************

function answerSubmitUp() {

    let upScore = 0

    let answerUpOne = document.getElementById("up-one").value
    let tickUpOne = document.getElementById("tick-up-one")
    let closeUpOne = document.getElementById("close-up-one")

    // Up Answer One Grows Up

    if (answerUpOne === "grows up") {
        tickUpOne.src = "../assets/images/green-tick.png";
        closeUpOne.style.display= "none"
        upScore ++;
        console.log(upScore)
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
        upScore ++;
        console.log(upScore)
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
        upScore ++;
        console.log(upScore)
    } else {
        tickUpThree.src = "../assets/images/incorrect-x.png"
    }

    // Up Answer Four Look Up

    let answerUpFour = document.getElementById("up-four").value
    let tickUpFour = document.getElementById("tick-up-four")

    if (answerUpFour === "look up") {
        tickUpFour.src = "../assets/images/green-tick.png";
        upScore ++;
        console.log(upScore)
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
        upScore ++;
        console.log(upScore)
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
        upScore ++;
        console.log(upScore)
    } else {
        tickUpSix.src = "../assets/images/incorrect-x.png"
    }

    // Counting up Score Verbs with Up
    
    let marksUp = document.getElementById("marksUp")
    
    if (upScore === 6) {
        marksUp.innerHTML = "Well done! You scored "+ upScore + " out of 6. On to the next excercise!"
    }
    else if (upScore === 5 || upScore === 4) {
        marksUp.innerHTML = "Almost there! You scored "+ upScore + " out of 6. Try again"
    }
    else if (upScore === 3 || upScore === 2) {
        marksUp.innerHTML = "Not great! You scored "+ upScore + " out of 6. Keep trying"
    }
    else if (upScore === 1 || upScore === 0) {
        marksUp.innerHTML = "Poor effort! You scored "+ upScore + " out of 6. Keep trying"
    }
    else {console.log(upScore)}
}


// ********* VERBS WITH DOWN **************

function answerSubmitDown() {

    let downScore = 0

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
        console.log(downScore)
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

    // Counting up Score Verbs with Down
    
    let marksDown = document.getElementById("marksDown")
    
    if (downScore === 6) {
        marksDown.innerHTML = "Well done! You scored "+ downScore + " out of 6. On to the next excercise!"
    }
    else if (downScore === 5 || downScore === 4) {
        marksDown.innerHTML = "Almost there! You scored "+ downScore + " out of 6. Try again"
    }
    else if (downScore === 3 || downScore === 2) {
        marksDown.innerHTML = "Not great! You scored "+ downScore + " out of 6. Keep trying"
    }
    else if (downScore === 1 || downScore === 0) {
        marksDown.innerHTML = "Poor effort! You scored "+ downScore + " out of 6. Keep trying"
    }
    else {console.log(downScore)}
}



// ********* VERBS WITH DOWN **************

function answerSubmitInto() {

    let storyResult = 0

    // Story Answer One

    let answerStoryOne = document.getElementById("story-one").value

    if (answerStoryOne === "ran into") {
        document.getElementById("story-one").style.borderColor = "#60de60"
        document.getElementById("story-one").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-one").style.borderColor = "red"
        document.getElementById("story-one").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Two

    let answerStoryTwo = document.getElementById("story-two").value

    if (answerStoryTwo === "broken down") {
        document.getElementById("story-two").style.borderColor = "#60de60"
        document.getElementById("story-two").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-two").style.borderColor = "red"
        document.getElementById("story-two").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Three

    let answerStoryThree = document.getElementById("story-three").value

    if (answerStoryThree === "looking into") {
        document.getElementById("story-three").style.borderColor = "#60de60"
        document.getElementById("story-three").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-three").style.borderColor = "red"
        document.getElementById("story-three").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Four

    let answerStoryFour = document.getElementById("story-four").value

    if (answerStoryFour === "look up") {
        document.getElementById("story-four").style.borderColor = "#60de60"
        document.getElementById("story-four").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-four").style.borderColor = "red"
        document.getElementById("story-four").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Five

    let answerStoryFive = document.getElementById("story-five").value

    if (answerStoryFive === "set up") {
        document.getElementById("story-five").style.borderColor = "#60de60"
        document.getElementById("story-five").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-five").style.borderColor = "red"
        document.getElementById("story-five").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Six

    let answerStorySix = document.getElementById("story-six").value

    if (answerStorySix === "closed down") {
        document.getElementById("story-six").style.borderColor = "#60de60"
        document.getElementById("story-six").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-six").style.borderColor = "red"
        document.getElementById("story-six").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Seven

    let answerStorySeven = document.getElementById("story-seven").value

    if (answerStorySeven === "go into") {
        document.getElementById("story-seven").style.borderColor = "#60de60"
        document.getElementById("story-seven").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-seven").style.borderColor = "red"
        document.getElementById("story-seven").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Eight

    let answerStoryEight = document.getElementById("story-eight").value

    if (answerStoryEight === "turn down") {
        document.getElementById("story-eight").style.borderColor = "#60de60"
        document.getElementById("story-eight").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-eight").style.borderColor = "red"
        document.getElementById("story-eight").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Nine

    let answerStoryNine = document.getElementById("story-nine").value

    if (answerStoryNine === "turned into") {
        document.getElementById("story-nine").style.borderColor = "#60de60"
        document.getElementById("story-nine").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-nine").style.borderColor = "red"
        document.getElementById("story-nine").style.backgroundColor = "#ebbdbd"
    }

    
    // Story Answer Ten

    let answerStoryTen = document.getElementById("story-ten").value

    if (answerStoryTen === "got into" || answerStoryTen === "gotten into") {
        document.getElementById("story-ten").style.borderColor = "#60de60"
        document.getElementById("story-ten").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-ten").style.borderColor = "red"
        document.getElementById("story-ten").style.backgroundColor = "#ebbdbd"
    }

    
    // Story Answer Eleven

    let answerStoryEleven = document.getElementById("story-eleven").value

    if (answerStoryEleven === "taken up") {
        document.getElementById("story-eleven").style.borderColor = "#60de60"
        document.getElementById("story-eleven").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-eleven").style.borderColor = "red"
        document.getElementById("story-eleven").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Twelve

    let answerStoryTwelve= document.getElementById("story-twelve").value

    if (answerStoryTwelve === "give up") {
        document.getElementById("story-twelve").style.borderColor = "#60de60"
        document.getElementById("story-twelve").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-twelve").style.borderColor = "red"
        document.getElementById("story-twelve").style.backgroundColor = "#ebbdbd"
    }


     // Story Answer Thirteen

    let answerStoryThirteen = document.getElementById("story-thirteen").value

    if (answerStoryThirteen === "broken into") {
        document.getElementById("story-thirteen").style.borderColor = "#60de60"
        document.getElementById("story-thirteen").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-thirteen").style.borderColor = "red"
        document.getElementById("story-thirteen").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Fourteen

    let answerStoryFourteen = document.getElementById("story-fourteen").value

    if (answerStoryFourteen === "wrote down") {
        document.getElementById("story-fourteen").style.borderColor = "#60de60"
        document.getElementById("story-fourteen").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-fourteen").style.borderColor = "red"
        document.getElementById("story-fourteen").style.backgroundColor = "#ebbdbd"
    }

    let marksStory = document.getElementById("marksStory")
    console.log(storyResult)

    marksStory.innerHTML = "You scored " + storyResult

    marksStory.style.opacity = 1 
}

// ********* VERBS WITH DOWN **************

function playAudioExcercise() {

    excerciseAudio = document.querySelectorAll("audio")

    excerciseAudio[0].play()
}

function pauseAudioExcercise() {

    excerciseAudio = document.querySelectorAll("audio")

    excerciseAudio[0].pause()
    
}

function stopAudioExcercise() {

    excerciseAudio = document.querySelectorAll("audio")

    excerciseAudio[0].pause()
    excerciseAudio[0].currentTime = 0
}

function playExampleAudio() {

    exampleAudio = document.querySelectorAll("audio")

    exampleAudio[1].play()
}