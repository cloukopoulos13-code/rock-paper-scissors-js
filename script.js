
//Gets the players choice for the game, converts to UPPER and checks if it's valid
function getPlayerChoice()
{
    while (true){
        choice = prompt("Rock, Paper, Scissors?").toUpperCase();    
        
        if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS")
        {
            return choice;
        }
    }
}