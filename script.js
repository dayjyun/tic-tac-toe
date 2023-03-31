const tdTags = document.querySelectorAll("td");

let playerOne = {
  name: "" || "Player One",
  // mainColor: "#b6dbfc",
  mainColor: "blue",
  // hoverColor: "#f0f8ff",
  hoverColor: "lightblue",
  value: "X",
  wins: 0,
};

let playerTwo = {
  name: "" || "Player Two",
  mainColor: "red",
  // mainColor: "#f8c28e",
  hoverColor: "pink",
  // hoverColor: "#fff6ec",
  value: "O",
  wins: 0,
};

let currentPlayer = playerOne;
// let currentPlayer = playerTwo;

// Header
// TODO Have a listener for the .current-player to update based on who's turn it is ***
// TODO Check if currentPlayer assignment in conditional is working ***
let nameDisplay = document.querySelector(".player-name");
nameDisplay.innerText = currentPlayer.name;

const newGameButton = document.querySelector(".new-game-button");
newGameButton.addEventListener("click", () => {
  tdTags.forEach((tdTag) => {
    tdTag.style.backgroundColor = "white";
  });
  // if (currentPlayer === playerOne) {
  currentPlayer = playerOne;
  // } else {
  //   currentPlayer = playerTwo;
  // }
});

function switchPlayer() {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
}

// Main

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

function mouseOver(e) {
  const isWhite = e.target.style.backgroundColor === 'white';

  // if (
  //   currentPlayer === playerOne &&
  //   currentColor !== playerOne.mainColor &&
  //   currentColor !== playerTwo.mainColor
  // ) {
  //   e.target.style.backgroundColor = playerOne.hoverColor;
  // } else if (
  //   currentPlayer === playerTwo &&
  //   currentColor !== playerOne.mainColor &&
  //   currentColor !== playerTwo.mainColor
  // ) {
  //   e.target.style.backgroundColor = playerTwo.hoverColor;
  // }

  if(isWhite && currentPlayer === playerOne){
    e.target.style.backgroundColor = playerOne.hoverColor;
  } else if(isWhite && currentPlayer === playerTwo) {
    e.target.style.backgroundColor = playerTwo.hoverColor;
  }
}

function mouseOut(e) {
  if (
    currentPlayer === playerOne &&
    e.target.style.backgroundColor !== playerOne.mainColor &&
    e.target.style.backgroundColor !== playerTwo.mainColor
  ) {
    e.target.style.backgroundColor = "white";
  } else if (
    currentPlayer === playerTwo &&
    e.target.style.backgroundColor !== playerOne.mainColor &&
    e.target.style.backgroundColor !== playerTwo.mainColor
  ) {
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
