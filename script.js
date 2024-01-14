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
    switch (playerSelection) {
        case "rock":
            playerSelection = 0;
            break;
        case "paper":
            playerSelection = 1;
            break;
        case "scissors":
            playerSelection = 2;
            break;
    }
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == 0 && computerSelection == 2) {
        return "Player Wins";
    } else if (computerSelection == 0 && playerSelection == 2) {
        return "Computer Wins";
    } else if (playerSelection > computerSelection) {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }
}

// Create an outer function game that runs playRound five times, keeps track of score, and reports the winner after