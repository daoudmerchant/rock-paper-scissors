// 'Helper' Functions

let capitalize = (string) => (string.charAt(0)).toUpperCase() + string.slice(1);

function computerPlay() {
    let randomSelector = Math.floor(Math.random() * 3) + 1;
    if (randomSelector === 1) { return 'rock' }
    else if (randomSelector === 2) { return 'paper' }
    else { return 'scissors' }
}

// 5 round game function

function game() {

    // Round function

    function playRound(playerSelection, computerSelection) {
        let win_lose = 'lose';
        let winner = capitalize(computerSelection)
        let loser = playerSelection;
        if (playerSelection === computerSelection) {
            return "It's a tie! You both chose " + computerSelection + ".";
        } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
                playerSelection === 'scissors' && computerSelection === 'paper' ||
                playerSelection === 'paper' && computerSelection === 'rock') {
            win_lose = 'win';
            winner = capitalize(playerSelection);
            loser = computerSelection;
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        return `You ${win_lose} this round! ${winner} beats ${loser}.`;
    }

    //

    let playerScore = 0, computerScore = 0;
    let roundCount;
    for (roundCount = 1; roundCount <=5; roundCount++) {
        console.log('Round ' + roundCount + ':');
        const playerSelection = (prompt('Rock, paper or scissors?', '')).toLowerCase();
        const computerSelection = computerPlay();
        console.log("You chose " + playerSelection);
        console.log("The computer chooses " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    }
    let overallWinner = (playerScore > computerScore) ? "You" : "The computer";
    let s = (overallWinner === "The computer") ? "s" : "";
    return `${overallWinner} win${s} the game of ${roundCount - 1} rounds!`
}

// Function invocation (to console)

console.log(game());

// Pseudo-Code (copied from notebook):

// To play a round:

// Declare the winner as the computer
// Declare the winning choice as the computer's choice
// Declare the losing choice as the computer's choice
// If the two choices are the same, RETURN a tie;
// Otherwise if the player has rock to the computer's scissors,
//                             scissors to the computer's paper or
//                             paper to the computer's rock,
//     change the winner to the player,
//     change the winning choice to the player's choice,
//     change the losing choice to the computer's choice and
//     give the player a point;
// Otherwise give the computer a point.
// RETURN the winner, the winning choice and the losing choice.

// To play a game:

// Declare the scores as 0
// -- Repeat 5 times --
// DISPLAY the round no.
// Ask the player for a choice
// Choose for the computer*
// DISPLAY the player's choice
// DISPLAY the computer's choice
// Play a round and DISPLAY the outcome
// DISPLAY the scores
// --------------------
// Once 5 rounds have been played, calculate and DISPLAY the winner

// *To choose for the computer:

// Choose a random number from 1 to 3
// Make 1 = rock,
//      2 = paper and
//      3 = scissors