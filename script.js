const tdTags = document.querySelectorAll("td");
const aliceBlue = "#F0F8FF";
const apricot = "#FFF6EC";
const mainBlue = "#B6DBFC";
const mainOrange = "#F8C28E";
const players = document.querySelectorAll(".player-info");
let playerOne = {
  name: "" || "Player One",
  mainColor: mainBlue,
  secondaryColor: aliceBlue,
  value: "X",
};

let playerTwo = {
  name: "" || "Player Two",
  mainColor: mainOrange,
  secondaryColor: apricot,
  value: "O",
};
let currentPlayer = playerOne; // starts game with player one
// let currentPlayer = playerTwo; // starts game with player two
let nameDisplay = document.querySelector(".player-name");

// Header
const newGameButton = document.querySelector(".new-game-button");
newGameButton.addEventListener("click", () => {
  tdTags.forEach((tdTag) => {
    tdTag.classList.remove("mainBlue");
    tdTag.classList.remove("mainOrange");
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
nameDisplay.innerText = currentPlayer.name;

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
  mainColor: mainBlue,
  secondaryColor: aliceBlue,
  value: "X",
};

let playerTwo = {
  mainColor: mainOrange,
  secondaryColor: apricot,
  value: "O",
};
*/

function mouseOver(e) {
  // TODO  the aliceBlue would represent the variable of current player ***
  if (currentPlayer === playerOne &&
    (!e.target.classList.contains(currentPlayer.mainColor) ||
    !e.target.classList.contains(playerOne.secondaryColor) ||
    e.target.classList.contains(playerTwo.secondaryColor))
  ) {
    e.target.classList.add("aliceBlue"); // change to currentPlayer.secondaryColor
  } else {
    e.target.classList.add("apricot");
  }
}

function mouseOut(e) {
  // TODO  the aliceBlue would represent the variable of current player ***
  if (e.target.classList.contains("aliceBlue")) {
    e.target.classList.remove("aliceBlue");
  } else if (e.target.classList.contains("apricot")) {
    e.target.classList.remove("apricot");
  }
}

tdTags.forEach((tdTag) => {
  tdTag.addEventListener("mouseover", mouseOver);
  tdTag.addEventListener("mouseout", mouseOut);

  tdTag.addEventListener("click", (e) => {
    if (
      (!e.target.classList.contains(playerOne.mainColor) ||
      !e.target.classList.contains(playerTwo.mainColor)) &&
      (!e.target.classList.contains(playerOne.secondaryColor) ||
      !e.target.classList.contains(playerTwo.secondaryColor))
    ) {
      // TODO change mainBlue to the current player's variable ***
      if(currentPlayer === playerOne){
        e.target.classList.add("mainBlue"); // currentPlayer.mainColor
      } else {
        e.target.classList.add('mainOrange')
      }
    }
    switchPlayer();
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
  //     playerName = playerOne.name;
  //   } else {
  //     playerName = playerTwo.name;
  //   }
  //   playerName = e.target.value || e.target.placeholder
  // })

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

// !DELETE *************************************************
let object = document.createElement("button");
object.innerText = "OBJECT";
object.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("ONE", playerOne);
  // console.log("TWO", playerTwo);
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
// Hold name values in a players object
// if name exists, then populate score values for player 1 and player 2
// else create a new instance of the player in the players object

// IF THERE'S LOCAL STORAGE
// Create a user icon in the nav bar.
// This loads all the saved names for player two
