// My pseudocode

// Get user and computer choices via prompt and randomization function
// Compute the result of a single round via some function and return result
// -> This function should also check if a user inputs falsy values (random strings, numbers, null, etc) and if true, return an appropriate message
// Create an encompassing function that calls the round computing function a specified number of times (by the user)
// -> This function should be reconfigured to use a while loop to account for ties

// My UI pseudocode 

// Create UI elements to reference in JS (the three buttons for user input, an empty paragraph or div for storing the results)
// Replace the user input functionality with an interactable medium (from prompt box to buttons with event listener)
// -> Change function game so that it takes an argument holding the value of the button pressed to make the calculations
// -> TOP recommends for now to remove the functionality that plays a specified number of rounds (the while loop)
// Change the way the user plays the game from being time-sensitive to being event sensitive
// -> Instead of calling function game at the start of the script, call it every time a button is clicked and calculate results on a round-by-round basis
// -> This means that the way the user tells the program how many rounds to play should be changed and kept in the global scope to avoid messing with the function calculations each round
// -> Also means that the variables tracking scores and rounds played must also be global to avoid being reset each time function game is called

const roundOutputTextbox = document.querySelector("div");
roundOutputTextbox.style.cssText = "border: 2px solid black; height: 300px; padding: 16px; font-size: 24px; margin-top: 16px; white-space: pre-line";
let playerScore = 0, computerScore = 0, roundCounter = 0, numOfRounds = 0;
const playerChoiceButtons = document.querySelectorAll(".player-choice");
playerChoiceButtons.forEach((button) => button.addEventListener("click", computePlayerChoice));
const numOfRoundsLabel = document.createElement("label");
const numOfRoundsInput = document.createElement("input");
const numOfRoundsInputSubmitButton = document.createElement("button");
const restartGameButton = document.createElement("button");
numOfRoundsLabel.textContent = "# of Rounds: "
numOfRoundsInputSubmitButton.textContent = "Submit";
numOfRoundsInputSubmitButton.style.cssText = "margin-top: 16px; margin-left: 8px";
restartGameButton.textContent = "Restart";
document.body.appendChild(numOfRoundsLabel);
document.body.appendChild(numOfRoundsInput);
document.body.appendChild(numOfRoundsInputSubmitButton);
playerChoiceButtons.forEach((button) => document.body.removeChild(button));
document.body.removeChild(roundOutputTextbox);

numOfRoundsInputSubmitButton.addEventListener("click", function() {
    if (Number.isInteger(parseInt(numOfRoundsInput.value))) {
        numOfRounds = +numOfRoundsInput.value;
        numOfRoundsInput.value = "";
        document.body.removeChild(numOfRoundsLabel);
        document.body.removeChild(numOfRoundsInput);
        document.body.removeChild(numOfRoundsInputSubmitButton);
        playerChoiceButtons.forEach((button) => document.body.appendChild(button));
        document.body.appendChild(roundOutputTextbox);
    } else {
        alert("Please enter a valid value.");
    }
})

restartGameButton.addEventListener("click", function() {
    document.body.removeChild(restartGameButton);
    roundOutputTextbox.textContent = "Output: ";
    document.body.appendChild(numOfRoundsLabel);
    document.body.appendChild(numOfRoundsInput);
    document.body.appendChild(numOfRoundsInputSubmitButton);
    playerChoiceButtons.forEach((button) => document.body.removeChild(button));
    document.body.removeChild(roundOutputTextbox);
    playerChoiceButtons.forEach((button) => button.addEventListener("click", computePlayerChoice));
    playerScore = 0, computerScore = 0, roundCounter = 0, numOfRounds = 0;
});

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function computePlayerChoice() {
    if (!(document.body.contains(numOfRoundsInputSubmitButton))) {
        let buttonValue = this.value;
        if (roundCounter < numOfRounds) {
            checkRoundResults(buttonValue);
        }
        if (roundCounter == numOfRounds) {
            playerChoiceButtons.forEach((button) => button.removeEventListener("click", computePlayerChoice));
            document.body.appendChild(restartGameButton);
            if (playerScore > computerScore) {
                displayWinnerMessage("Player");
            } else if (computerScore > playerScore) {
                displayWinnerMessage("Computer");
            } else {
                displayWinnerMessage();
            }
        } 
    }
}

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

function displayWinnerMessage(condition) {
    if (condition) {
        roundOutputTextbox.textContent += "\n----------\n" + `${condition} Wins the Entire Game!`;
    } else {
        roundOutputTextbox.textContent += "\n----------\n" + "You both win! Yippee!";
    }
}

function displayRoundResults(result, playerScore, playerChoice, computerScore, computerChoice) {
    let roundResultsMessage;
    if (result == "Tie" || result == "Invalid user input") {
        roundResultsMessage = (result == "Tie") ? "It was a tie! Run that one back!" : "Invalid user input";
    } else {
        roundResultsMessage = 
        `Player Score: ${playerScore}, ${playerChoice}\nComputer Score: ${computerScore}, ${computerChoice}\nResult: ${result}`
    }
    roundOutputTextbox.textContent = `Output: \n${roundResultsMessage}`;
}

function checkRoundResults(playerChoiceValue) {
    let playerChoice = playerChoiceValue;
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    if (result == "Player Wins") {
        playerScore += 1;
        roundCounter++;
    } else if (result == "Computer Wins") {
        computerScore += 1;
        roundCounter++;
    } else {
        displayRoundResults(result);
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
