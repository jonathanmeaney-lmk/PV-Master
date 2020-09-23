function answerSubmit() {
    let answerUpOne = document.getElementById("up-one").value
    let tickUpOne = document.getElementById("tick-up-one")
    let closeUpOne = document.getElementById("close-up-one")

    // Answer Up One

    if (answerUpOne === "grows up") {
        tickUpOne.src = "../assets/images/green-tick.png";
        closeUpOne.style.display= "none"
    } else if (answerUpOne === "grow up") {
        closeUpOne.innerHTML ="  Close! Hint: the subject is third person"
    }
    else {
        tickUpOne.src = "../assets/images/incorrect-x.png"
    }
}