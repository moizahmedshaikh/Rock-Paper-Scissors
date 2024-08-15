let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

let u = document.querySelector("#user-score");
let c = document.querySelector("#comp-score");







let genCompId = function () {
    let options = ["rock", "paper", "scissors"];
    let ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

let drawGame = function () {
    msg.innerText = "Game was Draw. Play again"

};

let showWinner = function (win,use,comp) {
    if (win) {
        userScore++
        u.innerText = userScore
       msg.innerText = `You Win🤩 ${use} beats ${comp}`;
       msg.style.backgroundColor = "green"
       
    }
    else {
        compScore++
        c.innerText = compScore
       msg.innerText = `You Lose😞${comp} beats ${use}`
       msg.style.backgroundColor = "red"

    }
};

let playGame = function (userChoice) {
    //Generate Computer Number
    let comChoice = genCompId();
    if (userChoice === comChoice) {
        //Draw Game
        drawGame();
       msg.style.backgroundColor = "black"
        
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        }
        else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
};

choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
        let choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});
