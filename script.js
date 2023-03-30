console.log("JS Loaded");

const tdTags = document.querySelectorAll("td");

const aliceBlue = '#F0F8FF'
const apricot = '#F5D6B8'

const playerInfoList = document.querySelectorAll(".player-info");

// let playerName = "";



// Header
// Add event listener to clear out board values
const newGameButton = document.querySelector(".new-game-button");
newGameButton.addEventListener("click", () => {
  // clear out the x and circle classes inside the tables
  tdTags.forEach(tdTag => {
    tdTag.style.background = 'white'
  })
});

// Main
const turnNameDisplay = document.querySelector(".turn-name-display");

// const tableTopBoxes = document.querySelectorAll('.table-top')
// const tableMidBoxes = document.querySelectorAll('.table-mid')
// const tableEndBoxes = document.querySelectorAll('.table-end')

// You hover over it, it changes the background color
// You hover away from it, it removes the background color
// You click the box, it changes the background color to the designated color

tdTags.forEach((tdTag) => {
  tdTag.addEventListener("mouseover", (e) => {
    if (e.target.value === undefined) {
      e.target.classList.add('aliceBlue');
    }
  });

  tdTag.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains('aliceBlue')) {
      e.target.style.backgroundColor = 'white';
    }
  });

  tdTag.addEventListener("click", (e) => {
    if (e.target.style.backgroundColor === 'white') {
      e.target.classList.add('blue');
    }
  });
});

// Section
// Add event listener to clear out the number of wins and ties back to zero
const resetScoreButton = document.querySelector(".reset-score-button");

// Have an object to store name and cpu info
// this also stores the wins for player 1 and player 2
// date ?

// loop through table divArr
// mouseover event for the block to highlight a background color
// background color will be based on player's turn
// when clicked, player's mark will be placed on div

// grab player 1 box
// add an event listener when clicked, it opens up a form
// the form allows users to update the name
// when pressing enter or clicking away, it save the name

// grab player 2 icon
// add event listener when clicked, it toggles to live person play

const nameInputBox = document.querySelector(".name-input");
nameInputBox.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    nameInputBox.disabled = true;
    nameInputBox.disabled = false;

    // Will need to send the name to the win display function
    const playerOneName = nameInputBox.value;
    console.log(playerOneName);
  }
});

// Extra
// Local Storage?
// Hold name values in a players object
// if name exists, then populate score values for player 1 and player 2
// else create a new instance of the player in the players object

// IF THERE'S LOCAL STORAGE
// Create a user icon in the nav bar.
// This loads all the saved names for player two
