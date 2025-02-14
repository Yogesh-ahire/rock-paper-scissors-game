let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //generate com choice
    const compChoice = gencompChoice();
    console.log(compChoice);
    if (userChoice === compChoice) {
        //drow game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //comp -> scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //comp -> rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            //user -> scissor
            //comp -> rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);

    })
})