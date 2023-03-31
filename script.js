const tdTags = document.querySelectorAll("td");
const currentPlayerName = document.querySelector(".current-player.name");
const currentPlayerColor = document.querySelector('.current-player.color')
let playerOneWins = document.querySelector(".player-one-wins");
let playerTwoWins = document.querySelector(".player-two-wins");
let gameTies = document.querySelector(".game-ties");

let playerOne = {
  name: "Player One",
  // mainColor: "#b6dbfc",
  // hoverColor: "#f0f8ff",
  mainColor: "blue",
  hoverColor: "lightblue",
  value: "X",
  wins: 3,
};

let playerTwo = {
  name: "Player Two",
  // mainColor: "#f8c28e",
  // hoverColor: "#fff6ec",
  mainColor: "red",
  hoverColor: "pink",
  value: "O",
  wins: 2,
};

let currentPlayer = playerOne;
// let currentPlayer = playerTwo;
let firstPlayer = currentPlayer

function start(){
  playerOneWins.innerText = playerOne.wins;
  playerTwoWins.innerText = playerTwo.wins;
  checkPlayer()
}
start()

function checkPlayer() {
  currentPlayer === playerOne ?
  currentPlayerName.innerText = playerOne.name :
  currentPlayerName.innerText = playerTwo.name;
}

function switchPlayer() {
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  currentPlayerName.innerText = currentPlayer.name;
}

// Game Logic
/*
max amount of times a user can select is 5
1 blue 1 orange
2 blue 2 orange
3 blue 3 orange
4 blue 4 orange
5 blue -> tie game

winning conditions
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[1, 4, 5],
[2, 4, 6]

loop through td arr
if (blue className count > orange className count){
  currentPlayer = playerTwo
} else { // it will equal therefore blue's turn
  currentPlayer = playerOne
}
*/
function winner(){
  // resetGame() // place under newGameButton event listener
}

function tieGame(){
  // display tie message
  // h2 Tie!
  // resetGame() // place under newGameButton event listener
  +gameTies.innerText++
}

// Header
const newGameButton = document.querySelector(".new-game-button");
let resetGame = newGameButton.addEventListener("click", () => {
  tdTags.forEach((tdTag) => {
    tdTag.style.backgroundColor = "white";
  });

  checkPlayer();
  currentPlayer = firstPlayer
  currentPlayerName.innerText = firstPlayer.name
});

// Main
function mouseOver(e) {
  const isWhite = e.target.style.backgroundColor === "white";

  if (currentPlayer === playerOne && isWhite) {
    e.target.style.backgroundColor = playerOne.hoverColor;
  } else if (currentPlayer === playerTwo && isWhite) {
    e.target.style.backgroundColor = playerTwo.hoverColor;
  }
}

function mouseOut(e) {
  const currentColor = e.target.style.backgroundColor;

  if (
    currentColor !== playerOne.mainColor &&
    currentColor !== playerTwo.mainColor) {
      e.target.style.backgroundColor = "white";
  } else if (
    currentColor !== playerOne.mainColor &&
    currentColor !== playerTwo.mainColor) {
      e.target.style.backgroundColor = "white";
  }
}

function clickColor(e) {
  const currentColor = e.target.style.backgroundColor;

  if (currentColor === playerOne.hoverColor) {
    e.target.style.backgroundColor = playerOne.mainColor;
    switchPlayer();
  } else if (currentColor === currentPlayer.hoverColor) {
    e.target.style.backgroundColor = playerTwo.mainColor;
    switchPlayer();
  }
}

tdTags.forEach((tdTag) => {
  tdTag.style.backgroundColor = "white";
  tdTag.addEventListener("mouseover", mouseOver);
  tdTag.addEventListener("mouseout", mouseOut);
  tdTag.addEventListener("click", clickColor);
});

// Section
// currentPlayerName.innerText = currentPlayer.name ||;

// currentPlayerName.addEventListener('input', (e) => {
//   if(currentPlayer === playerOne) {
//     currentPlayerName.innerText = playerOne.name || e.target.placeholder
//   } else {
//     currentPlayerName.innerText = playerTwo.name || e.target.placeholder
//   }
// })


function changeName(e){
  if (e.target.id === "player-one") {
    playerOne.name = e.target.value === "" ? "Player One" : e.target.value;
  } else {
    playerTwo.name = e.target.value === "" ? "Player Two" : e.target.value;
  }

  checkPlayer()
}

function pressedEnter(e){
  if (e.keyCode === 13) {
    e.preventDefault();
    e.target.disabled = true;
    e.target.disabled = false;
  }
}

const nameInputBoxes = document.querySelectorAll(".name-input");
nameInputBoxes.forEach((nameInputBox) => {
  nameInputBox.addEventListener("input", changeName);
  nameInputBox.addEventListener("keydown", pressedEnter);

  // *
  nameInputBox.addEventListener("blur", (e) => {
    if (e.target.placeholder === "" && e.target.id === "player-one") {
      e.target.placeholder = "Player One";
    } else if (e.target.placeholder === "" && e.target.id === "player-two") {
      e.target.placeholder = "Player Two";
    }
  });
});


const resetScoreButton = document.querySelector(".reset-score-button");
resetScoreButton.addEventListener('click', (e) => {
  e.preventDefault()
  playerOne.wins = 0
  playerTwo.wins = 0
  playerOneWins.innerText = 0
  playerTwoWins.innerText = 0
  gameTies.innerText = 0
  start()
})


// !DELETE *************************************************
let object = document.createElement("button");
object.innerText = "OBJECT";
object.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("ONE", playerOne);
  console.log("TWO", playerTwo);
  console.log("Current Player", currentPlayer);
});
newGameButton.insertAdjacentElement("afterend", object);
// !DELETE END *********************************************


// grab player 2 icon
// add event listener when clicked, it toggles to live person play

// Extra
// Local Storage?
// if name exists, then populate score values for player 1 and player 2
// else create a new instance of the player in the players object

// IF THERE'S LOCAL STORAGE
// Create a user icon in the nav bar.
// This loads all the saved names for player two
