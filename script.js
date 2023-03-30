const tdTags = document.querySelectorAll("td");
const aliceBlue = "aliceBlue";
const apricot = "apricot";
const mainBlue = "mainBlue";
const mainOrange = "mainColor";

const bgLightOne = "#F0F8FF";
const bgLightTwo = "#FFF6EC";
const bgMainOne = "#B6DBFC";
const bgMainTwo = "#F8C28E";

let playerOne = {
  name: "" || "Player One",
  mainColor: "#B6DBFC",
  secondaryColor: "#F0F8FF",
  value: "X",
  wins: 0,
};

let playerTwo = {
  name: "" || "Player Two",
  mainColor: "#F8C28E",
  secondaryColor: "#FFF6EC",
  value: "O",
  wins: 0,
};

// let currentPlayer = playerOne; // starts game with player one
let currentPlayer = playerTwo; // starts game with player two

// Header
let nameDisplay = document.querySelector(".player-name");
nameDisplay.innerText = currentPlayer.name;

const newGameButton = document.querySelector(".new-game-button");
newGameButton.addEventListener("click", () => {
  tdTags.forEach((tdTag) => {
    // tdTag.classList.remove("bgMainOne");
    // tdTag.classList.remove("bgMainTwo");
    tdTag.style.background = "white";
    currentPlayer = playerOne;
  });
});

function switchPlayer() {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
}

// Main
// TODO Have a listener for the .current-player to update based on who's turn it is ***

/*
max amount of times a user can select is 5
1 blue 1 orange
2 blue 2 orange
3 blue 3 orange
4 blue 4 orange

loop through td arr
if (blue className count > orange className count){
  currentPlayer = playerTwo
} else { // it will equal therefore blue's turn
  currentPlayer = playerOne
}
*/

/*
let playerOne = {
  mainColor: "#B6DBFC",
  secondaryColor: "#F0F8FF" || bgLightOne
};

let playerTwo = {
  mainColor: "#F8C28E",
  secondaryColor: "#FFF6EC" || bgLightTwo
};
*/

function mouseOver(e) {
  // TODO  the bgLightOne would represent the variable of current player ***
  if ((currentPlayer === playerOne && !e.target.style.backgroundColor !== playerOne.secondaryColor) ||
    e.target.style.backgroundColor !== playerTwo.secondaryColor) {
    e.target.style.backgroundColor = playerOne.secondaryColor; // change to currentPlayer.secondaryColor
  } else {
    e.target.style.backgroundColor = playerTwo.secondaryColor;
  }
}

function mouseOut(e) {
  // TODO  the bgLightOne would represent the variable of current player ***
  // if (e.target.classList.contains("bgLightOne")) {
  //   e.target.classList.remove("bgLightOne");
  // } else if (e.target.classList.contains("bgLightTwo")) {
  //   e.target.classList.remove("bgLightTwo");
  // }

  // if (e.target.style.backgroundColor === playerOne.secondaryColor || e.target.style.backgroundColor === playerTwo.secondaryColor) {
  //   e.target.style.backgroundColor = "white";
  // }

  if(e.target.style.backgroundColor !== 'white'){
    e.target.style.backgroundColor = 'white'
  }
}

tdTags.forEach((tdTag) => {
  tdTag.addEventListener("mouseover", mouseOver);
  tdTag.addEventListener("mouseout", mouseOut);

  tdTag.addEventListener("click", (e) => {
    if (
      currentPlayer === playerOne &&
      (!e.target.classList.contains(playerOne.mainColor) ||
        !e.target.classList.contains(playerTwo.mainColor)) &&
      !e.target.classList.contains(playerOne.secondaryColor)
    ) {
      // TODO change bgMainOne to the current player's variable ***
      // if(currentPlayer === playerOne){
      e.target.classList.add("bgMainOne"); // currentPlayer.mainColor
    } else {
      e.target.classList.add("bgMainTwo");
      // }
    }
    switchPlayer();
  });
});

// Section
const nameInputBoxes = document.querySelectorAll(".name-input");
nameInputBoxes.forEach((nameInputBox) => {
  nameInputBox.addEventListener("click", (e) => {
    e.target.placeholder = "";
  });

  nameInputBox.addEventListener("input", (e) => {
    console.log(e);
    e.preventDefault();
    if (e.target.id === "player-one") {
      playerOne.name = e.target.value;
    } else {
      playerTwo.name = e.target.value;
    }
    playerName = e.target.value || e.target.placeholder;
  });
  // TODO When focus is removed from the input boxes, how to save? ***

  nameInputBox.addEventListener("blur", (e) => {
    if (e.target.placeholder !== "") {
      if (e.target.id === "player-one") {
        playerOne.name = e.target.value;
      } else {
        playerTwo.name = e.target.value;
      }
    } else if (e.target.id === "player-one") {
      e.target.placeholder = "Player One";
    } else {
      e.target.placeholder = "Player Two";
    }
  });

  nameInputBox.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      nameInputBox.disabled = true;
      nameInputBox.disabled = false;

      if (e.target.id === "player-one") {
        playerOne.name = nameInputBox.value || "Player One";
      } else {
        playerTwo.name = nameInputBox.value || "Player Two";
      }
    }
  });
});

// TODO Add event listener to clear out the number of wins and ties back to zero ***
const resetScoreButton = document.querySelector(".reset-score-button");

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

// Player Display
/*
H1 Tag should show current player's name
When a user changes their name, it updates the h1 tag

*/

// grab player 2 icon
// add event listener when clicked, it toggles to live person play

// Extra
// Local Storage?
// if name exists, then populate score values for player 1 and player 2
// else create a new instance of the player in the players object

// IF THERE'S LOCAL STORAGE
// Create a user icon in the nav bar.
// This loads all the saved names for player two
