console.log("JS Loaded");

const tdTags = document.querySelectorAll("td");
const aliceBlue = "#F0F8FF";
const apricot = "#F5D6B8";
const players = document.querySelectorAll(".player-info");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
let playerOneName = "";
let playerTwoName = "";


// Header
const newGameButton = document.querySelector(".new-game-button");
newGameButton.addEventListener("click", () => {
  tdTags.forEach((tdTag) => {
    tdTag.classList.remove("lightBlue");
    tdTag.classList.remove("lightOrange");
  });
});

// Main
const turnNameDisplay = document.querySelector(".turn-name-display");

function mouseOver(e) {
  // TODO  the aliceBlue would represent the variable of current player
  if (!e.target.classList.contains("lightBlue")) {
    e.target.classList.add("aliceBlue");
  }
}

function mouseOut(e) {
  // TODO  the aliceBlue would represent the variable of current player
  if (e.target.classList.contains("aliceBlue")) {
    e.target.classList.remove("aliceBlue");
  }
}

tdTags.forEach((tdTag) => {
  tdTag.addEventListener("mouseover", mouseOver);
  tdTag.addEventListener("mouseout", mouseOut);

  tdTag.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("lightBlue") ||
      !e.target.classList.contains("lightOrange")
    ) {
      // TODO change lightBlue to the current player's variable
      e.target.classList.add("lightBlue");
    }
  });
});

// Section
// TODO Add event listener to clear out the number of wins and ties back to zero
const resetScoreButton = document.querySelector(".reset-score-button");

// Have an object to store name and cpu info
// this also stores the wins for player 1 and player 2
// date ?

const nameInputBoxes = document.querySelectorAll(".name-input");

nameInputBoxes.forEach((nameInputBox) => {
  nameInputBox.addEventListener("click", (e) => {
    e.target.placeholder = "";
  });

  nameInputBox.addEventListener("blur", (e) => {
    if (e.target.placeholder === "") {
      e.target.placeholder = "Player One";
    }
  });

  nameInputBox.addEventListener("keydown", (e) => {
    e.target.placeholder = "";
    if (e.keyCode === 13) {
      e.preventDefault();
      nameInputBox.disabled = true;
      nameInputBox.disabled = false;

      // Will need to send the name to the name holder for win display and turn player display
      playerOneName = nameInputBox.value;
    }
  });
});



// grab player 2 icon
// add event listener when clicked, it toggles to live person play

// Extra
// Local Storage?
// Hold name values in a players object
// if name exists, then populate score values for player 1 and player 2
// else create a new instance of the player in the players object

// IF THERE'S LOCAL STORAGE
// Create a user icon in the nav bar.
// This loads all the saved names for player two
