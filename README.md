# Tic-Tac-Toe

Bring the classic game from paper to modern technology. Introducing Tic-Tac-Toe with a with a simpler and more creative approach.


Try it out for yourself! [Tic-Tac-Toe](https://kbarrios.dev/tic-tac-toe/)

# Tech

It's wonderful how something so simple can create something so great!

- JavaScript
- CSS
- HTML

## **Snapshots**
## Wireframe
Original website layout

<img width="500" alt="wireframe" src="./media/tic-tac-toe_wireframe.png">

# Color Selection
Freely choose your assortment of colors. The game keep tracks of your move at all times

<img width="500" alt="color selection box" src="./media/color_selection.png">

# Mobile Integration

<<img width="500" alt="color selection box" src="./media/mobile_view.png">

# Features
Is it really a game if you can't play it?

- Play against another player from your phone or computer
    - Select on an opening and try to out strategize your opponent

- Update your player
    - Each player can change their name using alphanumeric characters, symbols, or even emoji's
    - Change your box's color to embrace your unique style

- Board
    - Choose who goes first and who goes second
    - Reset the board to restart the game
    - Reset the game scores to start fresh new matches

- Interactive Sounds
    - Helps avoid any awkward silence in between matches

# Behind The Scenes
Most of the functionalities complement one another. For example, as a user updates their name, it also updates the display name at the top of the board and updates the modal that appears once a round is over. The same is applied for the players' wins and ties counts.

One of the more outside-the-box approach is when a user decides to delete the name they have entered. The website would render the now deleted value as an empty string and would remove the name embedded for the user. The code to fix it was not much of a problem for what would make a high inconvenience for user experience.

```
if (e.target.id === "player-one") {
    playerOne.name = e.target.value === "" ? "Player One" : e.target.value;
  } else {
    playerTwo.name = e.target.value === "" ? "Player Two" : e.target.value;
  }
```

Another section that I had a fun time figuring out is updating the input color based on a user's turn. In other words, the input box where a user can choose their designated color switches to the current player's color. As each player would take a turn, the color box would change color along with the game.

A simple function would resolve the issue by assuring the game to display the correct information for the given player at their given turn.
```
function switchPlayer() {
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  currentPlayerName.innerText = currentPlayer.name;
  playerColorChoice.value = currentPlayer.color;
}
```

## Future
More fun along the way!
- [ ] Local Storage to save points and opponent history
- [ ] AI opponent
- [ ] Play online with other players

Credits for feedback
- [Jeff Ou](https://github.com/pophero110)
- [Dominique Akers](https://github.com/Dommy99)
