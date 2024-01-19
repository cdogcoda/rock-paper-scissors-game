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
    } else {
        return "Invalid user input";
    }
}

// Create a function to display the message that shows who won

function displayWinnerMessage(condition) {
    if (condition) {
        console.log("----------");
        console.log(`${condition} Wins the Entire Game!`);
        console.log("----------");
    } else {
        console.log("----------");
        console.log("You both win! Yippee!");
        console.log("----------");  
    }
}

// Create a function displayRoundResults that shows the winner of the current round

function displayRoundResults(result, playerScore, playerChoice, computerScore, computerChoice) {
    let roundResultsMessage;
    console.clear();
    if (result == "Tie" || result == "Invalid user input") {
        roundResultsMessage = (result == "Tie") ? "It was a tie! Run that one back!" : "Invalid user input";
    } else {
        roundResultsMessage = 
        `Player Score: ${playerScore}, ${playerChoice}\nComputer Score: ${computerScore}, ${computerChoice}\nResult: ${result}`
    }
    console.log("----------");
    console.log(roundResultsMessage);
    console.log("----------");
}

// Create an outer function game that runs playRound five times, keeps track of score, and reports the winner after

function game() {
    let playerScore = 0, computerScore = 0, i=0;
    let numOfRounds = 0, numOfRoundsExist = false;
    while (!(numOfRoundsExist)) {
        let numOfRoundsPrompt = prompt("How many rounds would you like to play?");
        if (isNaN(numOfRoundsPrompt) || numOfRoundsPrompt === null || numOfRoundsPrompt === undefined) {
            continue;
        } else {
            numOfRounds = +numOfRoundsPrompt;
            numOfRoundsExist = true;
        }
    }
    while (i<numOfRounds) {
        let playerChoice = prompt("Choose");
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        if (result == "Player Wins") {
            playerScore += 1;
            i++;
        } else if (result == "Computer Wins") {
            computerScore += 1;
            i++;
        } else {
            displayRoundResults(result);
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
        displayRoundResults(result, playerScore, playerChoice, computerScore, computerChoice);
    }
    if (playerScore > computerScore) {
        displayWinnerMessage("Player");
    } else if (computerScore > playerScore) {
        displayWinnerMessage("Computer");  
    } else {
        displayWinnerMessage();
    }
}

game()