console.log('JS Loaded')

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

// ! Find a way to preserve the name when enter is pressed
const nameInputBox = document.querySelector('.name-input')
nameInputBox.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        e.preventDefault()
        nameInputBox.disabled = true;
        nameInputBox.disabled = false;

        // Will need to send the name to the win display function
        const playerOneName = nameInputBox.value
        console.log(playerOneName)
    }
})

// Extra
// Local Storage?
// Hold name values in a players object
// if name exists, then populate score values for player 1 and player 2
// else create a new instance of the player in the players object

    // IF THERE'S LOCAL STORAGE
    // Create a user icon in the nav bar.
    // This loads all the saved names for player two
