const firstPlayerToggleButton = document.querySelector(".toggle-button");
const tdTags = document.querySelectorAll("td");
const newGameButton = document.querySelector(".clear-board-button");
const modalContainer = document.querySelector(".modal-container");
const modalBox = document.querySelector(".modal-box");
const modalButton = document.querySelector(".modal-button");
const currentPlayerName = document.querySelector(".current-player.name");
const colorPicker = document.querySelector(".color-picker");
const pointsArr = document.querySelectorAll(".points");
const winsSpan = document.querySelectorAll(".wins > *");
let playerOneWins = document.querySelector(".player-wins.one.section");
let playerTwoWins = document.querySelector(".player-wins.two.section");
const lightGray = "rgb(154, 154, 154)";
let gameTies = document.querySelector(".game-ties");
let gameTiesModal = document.querySelector('.game-ties.modal')

let playerOne = {
  id: 1,
  name: "Player One",
  mainColor: "#0000ff",
  wins: 0,
};

let playerTwo = {
  id: 2,
  name: "Player Two",
  mainColor: "#Ff0000",
  wins: 0,
};

let ties = 0;
let currentPlayer = playerOne;
let firstPlayer = currentPlayer;

document.addEventListener("DOMContentLoaded", () => {
  colorPicker.value = currentPlayer.mainColor;
});

firstPlayerToggleButton.addEventListener("click", (e) => {
  switchPlayer();
  checkPlayer();
});

function checkPlayer() {
  currentPlayer === playerOne
    ? (currentPlayerName.innerText = playerOne.name)
    : (currentPlayerName.innerText = playerTwo.name);

  colorPicker.value = currentPlayer.mainColor;
  firstPlayer = currentPlayer;
}

colorPicker.addEventListener("blur", (e) => {
  const color = e.target.value;
  currentPlayer.mainColor = color;
});

function switchPlayer() {
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  currentPlayerName.innerText = currentPlayer.name;
  colorPicker.value = currentPlayer.mainColor;
}

function gameModal(n) {
  modalContainer.style.display = "block";
  const winnerText = document.querySelector(".winner-info");
  const playerOneName = document.querySelector(".player-name-modal.one");
  const playerTwoName = document.querySelector(".player-name-modal.two");
  const playerOneWins = document.querySelector(".player-wins.one.modal");
  const playerTwoWins = document.querySelector(".player-wins.two.modal");

  if (n === 1) {
    winnerText.innerText = `${currentPlayer.name} Won!`;
    playerOneName.innerText = playerOne.name;
    playerTwoName.innerText = playerTwo.name;
    playerOneWins.innerText = playerOne.wins;
    playerTwoWins.innerText = playerTwo.wins;
  } else {
    winnerText.innerText = `Tie!`
    gameTies.innerText = ties;
    gameTiesModal.innerText = ties;
  }
}

function clearBoard(e) {
  tdTags.forEach((tdTag) => {
    tdTag.style.backgroundColor = "white"
    tdTag.classList.remove(playerOne.id)
    tdTag.classList.remove(playerTwo.id)
  });
  currentPlayer = firstPlayer;
  checkPlayer();
  currentPlayerName.innerText = firstPlayer.name;
  colorPicker.value = currentPlayer.mainColor;
  modalContainer.style.display = "none";
}

modalButton.addEventListener("click", clearBoard);
modalContainer.addEventListener("click", clearBoard);

// Header
newGameButton.addEventListener("click", clearBoard);

function choosePlayerColor(e) {
  const currentColor = e.target.style.backgroundColor;

  if (currentColor === "white") {
    e.target.style.backgroundColor = currentPlayer.mainColor;
    e.target.classList.add(currentPlayer.id);
    checkWinner();
    switchPlayer();
  }
}

tdTags.forEach((tdTag) => {
  tdTag.style.backgroundColor = "white";
  tdTag.addEventListener("click", choosePlayerColor);
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
  ties = 0;
  playerOneWins.innerText = 0;
  playerTwoWins.innerText = 0;
  gameTies.innerText = ties;
  winsSpan.forEach((win) => {
    win.style.color = lightGray;
    win.style.fontWeight = "500";
  });
  start();
});

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
      cellA.classList.contains(currentPlayer.id) &&
      cellB.classList.contains(currentPlayer.id) &&
      cellC.classList.contains(currentPlayer.id)
    ) {
      currentPlayer.wins++;
      if (currentPlayer === playerOne) {
        playerOneWins.innerText = playerOne.wins;
      } else {
        playerTwoWins.innerText = playerTwo.wins;
      }
      winningColor();
      gameModal(1);
      return;
    }
  }
  checkTies()
}

function checkTies() {
  let hasEmptyCell = false;

  for (let i = 0; i < tdTags.length; i++) {
    if (
      !tdTags[i].classList.contains(playerOne.id) &&
      !tdTags[i].classList.contains(playerTwo.id)
    ) {
      hasEmptyCell = true;
      break;
    }
  }

  if (!hasEmptyCell) {
    ties++
    gameModal(0);
  }
}


function winningColor() {
  let playerOnePoints = +pointsArr[0].innerText;
  let playerTwoPoints = +pointsArr[1].innerText;

  if (playerOnePoints > playerTwoPoints) {
    winsSpan[0].style.color = "green";
    winsSpan[0].style.fontWeight = "800";
  } else if (playerOnePoints < playerTwoPoints) {
    winsSpan[1].style.color = "green";
    winsSpan[1].style.fontWeight = "800";
  } else {
    winsSpan.forEach((win) => {
      win.style.color = lightGray;
      win.style.fontWeight = "500";
    });
  }
}

function start() {
  playerOneWins.innerText = playerOne.wins;
  playerTwoWins.innerText = playerTwo.wins;
  checkPlayer();
}
start();
