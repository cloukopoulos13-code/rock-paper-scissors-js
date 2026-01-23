
//Gets the players choice for the game, converts to UPPER and checks if it's valid
function getPlayerChoice()
{
    while (true)
    {
        choice = prompt("Rock, Paper, Scissors?").toUpperCase();    
        
        if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS")
        {
            return choice;
        }
    }
}

//Chooses a random number between 0 and 2, and assigns a choice based on that
function getCompChoice()
{
    choice = Math.floor(Math.random() * 3);

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