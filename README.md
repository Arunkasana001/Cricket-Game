# Bat Ball Stump

A lightweight browser game inspired by Rock, Paper, Scissors. Pick a bat, ball, or stump and play a quick round against the computer.

## How to play

1. Open `index.html` in a modern web browser.
2. Select **Bat**, **Ball**, or **Stump**.
3. The computer makes a random choice and the game displays both moves and the round result.
4. Your wins, losses, and ties are shown separately on the scoreboard.
5. Select **Reset Score** to clear the scoreboard.

The score is saved in your browser's local storage, so it remains available when you revisit the game in the same browser.

## Rules

| Your choice | Computer choice | Result |
|---|---|---|
| Bat | Ball | You win |
| Bat | Stump | Computer wins |
| Ball | Stump | You win |
| Ball | Bat | Computer wins |
| Stump | Bat | You win |
| Stump | Ball | Computer wins |
| Same choice | Same choice | Tie |

## Project files

- `index.html` — game page and choice, result, and scoreboard elements.
- `style.css` — responsive layout and visual styling.
- `script.js` — game rules, computer choice, and browser-local score persistence.
- `images/` — bat, ball, and stump artwork used for the choices.

No dependencies or build step are required.
