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

function inputOutOfFocus(e){
  if (e.target.placeholder === "" && e.target.id === "player-one") {
    e.target.placeholder = "Player One";
  } else if (e.target.placeholder === "" && e.target.id === "player-two") {
    e.target.placeholder = "Player Two";
  }
}

const nameInputBoxes = document.querySelectorAll(".name-input");
nameInputBoxes.forEach((nameInputBox) => {
  nameInputBox.addEventListener("input", changeName);
  nameInputBox.addEventListener("keydown", pressedEnter);
  nameInputBox.addEventListener("blur", inputOutOfFocus)
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


function start() {
  playerOneWins.innerText = playerOne.wins;
  playerTwoWins.innerText = playerTwo.wins;
  checkPlayer();
}
start();


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
// resetGame()

// button to save game
// saves playerOne obj (name, wins, mainColor, hoverColor, color)
// saves playerTwo obj (name, wins, mainColor, hoverColor, color)
// else create a new instance of the player in the players object

// IF THERE'S LOCAL STORAGE
// Create a user icon in the nav bar.
// This loads all the saved names for player two
