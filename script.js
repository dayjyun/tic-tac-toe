const tdTags = document.querySelectorAll("td");
const newGameButton = document.querySelector(".clear-board-button");
const modalContainer = document.querySelector(".modal-container");
const modalBox = document.querySelector(".moda-box");
const modalButton = document.querySelector(".modal-button");
const currentPlayerName = document.querySelector(".current-player.name");
const currentPlayerColor = document.querySelector(".current-player.color");
let playerOneWins = document.querySelector(".player-one-wins");
let playerTwoWins = document.querySelector(".player-two-wins");
let gameTies = document.querySelector(".game-ties");

let playerOne = {
  name: "Player One",
  mainColor: "blue",
  hoverColor: "lightblue",
  wins: 0,
};

let playerTwo = {
  name: "Player Two",
  mainColor: "red",
  hoverColor: "pink",
  wins: 0,
};

let currentPlayer = playerOne;
// let currentPlayer = playerTwo;
let firstPlayer = currentPlayer;
let ties = 0;

function checkPlayer() {
  currentPlayer === playerOne
    ? (currentPlayerName.innerText = playerOne.name)
    : (currentPlayerName.innerText = playerTwo.name);
}

function switchPlayer() {
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  currentPlayerName.innerText = currentPlayer.name;
}

function gameModal(n) {
  const modal = document.querySelector(".modal-container");
  modal.style.display = "block";
  const winnerText = document.querySelector(".winner-info");

  if (n === 1) {
    winnerText.innerText = `${currentPlayer.name} won!`;
  } else {
    winnerText.innerText = `Tie!`;
  }
}

function clearBoard(e) {
  tdTags.forEach((tdTag) => (tdTag.style.backgroundColor = "white"));
  checkPlayer();
  currentPlayer = firstPlayer;
  currentPlayerName.innerText = firstPlayer.name;
  modalContainer.style.display = "none";
}

modalButton.addEventListener("click", clearBoard);
modalContainer.addEventListener("click", clearBoard);

// Header
newGameButton.addEventListener("click", clearBoard);

// Main
function mouseOver(e) {
  const bgIsWhite = e.target.style.backgroundColor === "white";

  if (currentPlayer === playerOne && bgIsWhite) {
    e.target.style.backgroundColor = playerOne.hoverColor;
  } else if (currentPlayer === playerTwo && bgIsWhite) {
    e.target.style.backgroundColor = playerTwo.hoverColor;
  }
}

function mouseOut(e) {
  const currentColor = e.target.style.backgroundColor;

  if (
    currentColor !== playerOne.mainColor &&
    currentColor !== playerTwo.mainColor
  ) {
    e.target.style.backgroundColor = "white";
  }
}

function clickColor(e) {
  const currentColor = e.target.style.backgroundColor;

  if (currentColor === playerOne.hoverColor) {
    e.target.style.backgroundColor = playerOne.mainColor;
    checkWinner(playerOne);
    switchPlayer();
  } else if (currentColor === playerTwo.hoverColor) {
    e.target.style.backgroundColor = playerTwo.mainColor;
    checkWinner(playerTwo);
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
function changeName(e) {
  if (e.target.id === "player-one") {
    playerOne.name = e.target.value === "" ? "Player One" : e.target.value;
  } else {
    playerTwo.name = e.target.value === "" ? "Player Two" : e.target.value;
  }

  checkPlayer();
}

function pressedEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    e.target.disabled = true;
    e.target.disabled = false;
  }
}

function inputOutOfFocus(e) {
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
  nameInputBox.addEventListener("blur", inputOutOfFocus);
});

const resetScoreButton = document.querySelector(".reset-score-button");
resetScoreButton.addEventListener("click", (e) => {
  e.preventDefault();
  playerOne.wins = 0;
  playerTwo.wins = 0;
  playerOneWins.innerText = 0;
  playerTwoWins.innerText = 0;
  ties = 0;
  gameTies.innerText = ties;
  start();
});

function start() {
  playerOneWins.innerText = playerOne.wins;
  playerTwoWins.innerText = playerTwo.wins;
  checkPlayer();
}
start();

// Game Logic
function checkWinner() {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const cols = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const cross = [
    [0, 4, 8],
    [2, 4, 6],
  ];

  const wins = [...rows, ...cols, ...cross];

  for (let i = 0; i < wins.length; i++) {
    const [a, b, c] = wins[i];
    const cellA = tdTags[a];
    const cellB = tdTags[b];
    const cellC = tdTags[c];

    if (
      cellA.style.backgroundColor === currentPlayer.mainColor &&
      cellB.style.backgroundColor === currentPlayer.mainColor &&
      cellC.style.backgroundColor === currentPlayer.mainColor
    ) {
      currentPlayer.wins++;
      if (currentPlayer === playerOne) {
        playerOneWins.innerText = playerOne.wins;
      } else {
        playerTwoWins.innerText = playerTwo.wins;
      }

      gameModal(1);
    }
  }

  const whiteBoxArr = Array.from(tdTags).filter((td) => {
    return td.style.backgroundColor === "white";
  });

  if (whiteBoxArr.length === 0) {
    ties++;
    tieGame();
  }
}

function tieGame() {
  gameModal(0);
  gameTies.innerText = ties;
  return;
}

// Extra
// Create a user icon in the nav bar.
// grab player 2 icon
// add event listener when clicked, it toggles the CPU to play

// IF THERE'S LOCAL STORAGE
// This loads all the saved names for player two

// Local Storage?
// if name exists, then populate score values for player 1 and player 2

// Class to save game
// saves playerOne obj (name, wins, mainColor, hoverColor, color)
// saves playerTwo obj (name, wins, mainColor, hoverColor, color)
// else create a new instance of the player in the players object
