// TOP's recommended steps

// Create a function getComputerChoice that randomly returns rock, paper, or scissors (using some randomized function)
// This should return and represent the computer's choice in each round of a game

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// Create a function playRound that takes two parameters (playerSelection, computerSelection) to play a round of the game
// This should return a string declaring who won (should be case-insensitive, account for ties by playing the round again (recalling func.?))

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {}
}

// Create an outer function game that runs playRound five times, keeps track of score, and reports the winner after