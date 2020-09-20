function myfunction() {
    let answerone = document.getElementById("input-one").value
    let tickone = document.getElementById("tick-one")
    let closeone = document.getElementById("close-one")

    if (answerone === "gives up") {
        tickone.src = "../assets/images/green-tick.png";
        closeone.style.display= "none"
    } else if (answerone === "give up") {
        closeone.innerHTML ="  Uh close! Hint: the subject is third person"
    }
    else {
        tickone.src = "../assets/images/incorrect-x.png"
    }
}