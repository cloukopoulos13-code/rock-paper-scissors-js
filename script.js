//Global scoring variables
let playerScore = 0;
let compScore = 0;
let currentRound = 0;

//Gets the players choice for the game, converts to UPPER and checks if it's valid
function getPlayerChoice()
{
    while (true)
    {
        let choice = prompt("Rock, Paper, Scissors?").toUpperCase();    
        
        if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS")
        {
            return choice;
        }
        else{
            console.log("Sorry, invalid input. Try again.");
        }
    }
}

//Chooses a random number between 0 and 2, and assigns a choice based on that
function getCompChoice()
{
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0)
    {
        return "ROCK";
    }
    else if (choice == 1)
    {
        return "PAPER";
    }
    else
    {
        return "SCISSORS";
    }
}

//Gets the player and computer choices, then compares to see who wins the round
function playRound(playerChoice)
{
    let compChoice = getCompChoice();
    const resultDisplay = document.querySelector(".results");
    const playerPick = document.querySelector(".player-pick");
    const compPick = document.querySelector(".comp-pick");
    const winner = document.querySelector(".round-winner");
    const playerPointUI = document.querySelector(".player-score");
    const computerPointUI = document.querySelector(".comp-score");

    //console.log(`You chose: ${playerChoice}`);
    //console.log(`Computer chose: ${compChoice}`);
    
    playerPick.textContent = `You chose: ${playerChoice}`;
    compPick.textContent = `Computer chose: ${compChoice}`;

    if (playerChoice === compChoice)
    {
        winner.textContent = "It's a draw!";
        console.log("It's a draw!");
    }
    else if (playerChoice === "ROCK")
    {
        if(compChoice === "PAPER")
        {
            winner.textContent = "You lost.";
            console.log("You lost.");
            compScore++;
        }
        else{
            winner.textContent = "You win!";
            console.log("You win!");
            playerScore++;
        }
    }
    else if (playerChoice === "PAPER")
    {
        if(compChoice === "SCISSORS")
        {
            winner.textContent = "You lost.";
            //console.log("You lost.");
            compScore++;
        }
        else{
            winner.textContent = "You win!";
            //console.log("You win!");
            playerScore++;
        }
    }
    else if (playerChoice === "SCISSORS")
    {
        if(compChoice === "ROCK")
        {
            winner.textContent = "You lost.";
            console.log("You lost.");
            compScore++;
        }
        else{
            winner.textContent = "You win!";
            console.log("You win!");
            playerScore++;
        }
    }
    playerPointUI.textContent = `Your Score: ${playerScore}`;
    computerPointUI.textContent = `Computer Score: ${compScore}`;
    ++currentRound;
    console.log(currentRound);
    if(currentRound === 5)
    {
        console.log("Game Over");
        buttons.forEach(button => { button.style.visibility = "hidden" });
        let winner = "";
        if(playerScore > compScore)
        {
            winner = "You";
        }
        else{
            winner = "The Computer";
        }
        const winDisplay = document.querySelector(".winner");
        winDisplay.textContent = `Game End! Winner: ${winner}`;
        let restart = document.createElement("button");
        restart.textContent = "Restart";
        document.body.append(restart)
        restart.addEventListener("click", (e) => {
            currentRound = 0;
            playerScore = 0;
            compScore = 0;
            buttons.forEach(button => { button.style.visibility = "visible" });
            winDisplay.textContent = "";
            e.target.remove();
        })
    }
}

//Plays 5 rounds of Rock, Paper, Scissors and announces the winner
function playGame(rounds)
{
    for (let round = 0; round <=rounds; round++)
    {
        playRound();
        console.log(`Player Score: ${playerScore}  |  Computer Score: ${compScore}`);
    }

    if (playerScore > compScore)
    {
        console.log("You Won The Game!");
    }
    else if (playerScore < compScore)
    {
        console.log("You Lost The Game.");
    }
    else
    {
        console.log("It's A Tie.");
    }
}


//Game UI Logic
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
            
        playRound(button.className.toUpperCase());
        })
    
    }
)

