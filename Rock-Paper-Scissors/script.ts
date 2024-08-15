let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");



let genCompId = () =>{
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

let drawGame = () => {
    console.log("Draw Game");
}

let showWinner = (win) => {
    if(win){
    console.log(`you win`);
    }else{
        console.log(`you lose`);
        
    }
}

let playGame = (userChoice) => {
    console.log(`User Choice = ${userChoice}`);
    //Generate Computer Number
    const comChoice = genCompId();

    console.log(`comp Choice = ${comChoice}`);
    if(userChoice === comChoice){
        //Draw Game
        drawGame()
    }else{
        let userWin = true;

        if(userChoice === "rock"){

            userWin = comChoice === "paper" ? false : true
        }else if(userChoice === "paper"){

            userWin = comChoice === "scissors" ? false : true
        }else{
            userWin = comChoice === "rock" ? false : true
        }

        showWinner(userWin)
    }
    
}


choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id")
        playGame(choiceId)
        
    })
})
