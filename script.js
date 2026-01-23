//Global scoring variables
let playerScore = 0;
let compScore = 0;

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
function playRound()
{
    let playerChoice = getPlayerChoice();
    let compChoice = getCompChoice();

    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${compChoice}`);

    if (playerChoice === compChoice)
    {
        console.log("It's a draw!");
    }
    else if (playerChoice === "ROCK")
    {
        if(compChoice === "PAPER")
        {
            console.log("You lost.");
            compScore++;
        }
        else{
            console.log("You win!");
            playerScore++;
        }
    }
    else if (playerChoice === "PAPER")
    {
        if(compChoice === "SCISSORS")
        {
            console.log("You lost.");
            compScore++;
        }
        else{
            console.log("You win!");
            playerScore++;
        }
    }
    else if (playerChoice === "SCISSORS")
    {
        if(compChoice === "ROCK")
        {
            console.log("You lost.");
            compScore++;
        }
        else{
            console.log("You win!");
            playerScore++;
        }
    }
}

//Plays 5 rounds of Rock, Paper, Scissors and announces the winner
function playGame()
{
    for (let round = 0; loop <=4; round++)
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