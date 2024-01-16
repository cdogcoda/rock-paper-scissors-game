// My pseudocode

// Get user and computer choices via prompt and randomization function
// Compute the result of a single round via some function and return result
// -> This function should also check if a user inputs falsy values (random strings, numbers, null, etc) and if true, return an appropriate message
// Create an encompassing function that calls the round computing function a specified number of times (by the user)
// -> This function should be reconfigured to use a while loop to account for ties

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
    if (!(playerSelection)) {
        return "Invalid user input";
    } else {
        playerSelection = playerSelection.toLowerCase();
    }
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
    } else if (computerSelection > playerSelection) {
        return "Computer Wins";
    }
}

// Create an outer function game that runs playRound five times, keeps track of score, and reports the winner after

function game() {
    let playerScore = 0, computerScore = 0;
    for (i=0; i<5; i++) {
        let playerChoice = prompt("Choose");
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        if (result == "Player Wins") {
            playerScore += 1;
        } else if (result == "Computer Wins") {
            computerScore += 1;
        } else {
            continue;
        }
        switch (computerChoice) {
            case 0:
                computerChoice = "rock";
                break;
            case 1:
                computerChoice = "paper";
                break;
            case 2:
                computerChoice = "scissors";
                break;
        }
        console.log(`Player Score: ${playerScore}, ${playerChoice}`);
        console.log(`Computer Score: ${computerScore}, ${computerChoice}`);
        console.log(`Result: ${result}`);
        console.log("");
    }
}

game()