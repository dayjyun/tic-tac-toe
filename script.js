console.log("JS Loaded");

const tdTags = document.querySelectorAll("td");
const aliceBlue = "#F0F8FF";
const apricot = "#F5D6B8";
const lightBlue = "#B6DBFC"
const lightOrange = "#F8C28E"
const players = document.querySelectorAll(".player-info");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
let playerOneObj = {name: "" || "Player One", mainColor: aliceBlue, secondColor: lightBlue, value: "X"}
let playerTwoObj = {name: "" || "Player Two", mainColor: apricot, secondColor: lightOrange, value: "O"}
let currentPlayer = playerOneObj; // starts game with player one
// let currentPlayer = playerTwoObj; // starts game with player two
let nameDisplay = document.querySelector(".player-name");

// Header
const newGameButton = document.querySelector(".new-game-button");
newGameButton.addEventListener("click", () => {
  tdTags.forEach((tdTag) => {
    tdTag.classList.remove("lightBlue");
    tdTag.classList.remove("lightOrange");
  });
});

function switchPlayer() {
  if (currentPlayer === playerOneObj) {
    currentPlayer = playerTwoObj;
  } else {
    currentPlayer = playerOneObj;
  }
}

// Main
// TODO Have a listener for the .current-player to update based on who's turn it is ***
nameDisplay.innerText = currentPlayer.name


/*
max amount of times a user can select is 5
1 blue 1 orange
2 blue 2 orange
3 blue 3 orange
4 blue 4 orange

loop through td arr
if (blue className count > orange className count){
  orange turn
} else { // it will equal therefore blue's turn
  blue turn
}
*/

function mouseOver(e) {
  // TODO  the aliceBlue would represent the variable of current player ***
  if (!e.target.classList.contains(currentPlayer.secondColor) || !e.target.classList.contains(playerOneObj.mainColor) || e.target.classList.contains(playerTwoObj.mainColor)) {
    e.target.classList.add("aliceBlue"); // change to currentPlayer.secondCOlor
  }
}

function mouseOut(e) {
  // TODO  the aliceBlue would represent the variable of current player ***
  if (e.target.classList.contains("aliceBlue")) {
    e.target.classList.remove("aliceBlue");
  }
}

tdTags.forEach((tdTag) => {
  tdTag.addEventListener("mouseover", mouseOver);
  tdTag.addEventListener("mouseout", mouseOut);

  tdTag.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("lightBlue") || // playerOneObj.secondColor
      !e.target.classList.contains("lightOrange") // playerTwoObj.secondColor
    ) {
      // TODO change lightBlue to the current player's variable ***
      e.target.classList.add("lightBlue");
      switchPlayer()
    }
  });
});

// Section
// TODO Add event listener to clear out the number of wins and ties back to zero ***
const resetScoreButton = document.querySelector(".reset-score-button");

const nameInputBoxes = document.querySelectorAll(".name-input");
nameInputBoxes.forEach((nameInputBox) => {
  nameInputBox.addEventListener("click", (e) => {
    e.target.placeholder = "";
  });

  // nameInputBox.addEventListener('change', (e) => {
  //   e.preventDefault()
  //   if(e.target.id === "player-one"){
  //     playerName = playerOneObj.name;
  //   } else {
  //     playerName = playerTwoObj.name;
  //   }
  //   playerName = e.target.value || e.target.placeholder
  // })

  nameInputBox.addEventListener("blur", (e) => {
    if (e.target.placeholder !== "") {
      if(e.target.id === "player-one"){
        playerOneObj.name = e.target.value;
      } else {
        playerTwoObj.name = e.target.value;
      }
    } else if(e.target.id === 'player-one'){
      e.target.placeholder = "Player One"
    } else {
      e.target.placeholder = "Player Two"
    }
  });

  nameInputBox.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      nameInputBox.disabled = true;
      nameInputBox.disabled = false;

      if(e.target.id === "player-one"){
        playerOneObj.name = nameInputBox.value || "Player One";
      } else {
        playerTwoObj.name = nameInputBox.value || "Player Two"
      }
    }
  });
});

// !DELETE *************************************************
let object = document.createElement('button')
object.innerText = "OBJECT"
object.addEventListener('click', (e) => {
  e.preventDefault()
  console.log("ONE", playerOneObj)
  console.log("TWO", playerTwoObj)
  console.log("Current Player", currentPlayer)
})
newGameButton.insertAdjacentElement("afterend",object)
// !DELETE END *********************************************

// Player Display
/*
H1 Tag should show current player's name
When a user changes their name, it updates the h1 tag

*/


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
