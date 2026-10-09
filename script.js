


let scoreStr = localStorage.getItem('Score');
let score;

function resetScore(scoreData) {
    score = scoreData ? JSON.parse(scoreData) : {
        win: 0,
        lost: 0,
        tie: 0
    };

    showResult();
}

resetScore(scoreStr);

function generateComputerChoice() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
    } else {
        return 'Stump';
    }
}

function getResult(userMove, computerMove) {
    if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
            score.win++;
            return 'You win!';
        } else if (computerMove === 'Bat') {
            score.tie++;
            return "It's a tie.";
        } else if (computerMove === 'Stump') {
            score.lost++;
            return 'Computer wins!';
        }
    } else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
            score.tie++;
            return "It's a tie.";
        } else if (computerMove === 'Bat') {
            score.lost++;
            return 'Computer wins!';
        } else if (computerMove === 'Stump') {
            score.win++;
            return 'You win!';
        }
    } else if (userMove === 'Stump') {
        if (computerMove === 'Ball') {
            score.lost++;
            return 'Computer wins!';
        } else if (computerMove === 'Bat') {
            score.win++;
            return 'You win!';
        } else if (computerMove === 'Stump') {
            score.tie++;
            return "It's a tie.";
        }
    }
}

function showResult(userMove, computerMove, result) {
    localStorage.setItem('Score', JSON.stringify(score));

    document.querySelector('#user-move').innerText = userMove ? `You: ${userMove}` : 'You: Ready?';
    document.querySelector('#computer-move').innerText = computerMove ? `Computer: ${computerMove}` : 'Computer: Waiting...';
    document.querySelector('#result').innerText = result || 'Make your move to begin the match!';
    document.querySelector('#wins').innerText = score.win;
    document.querySelector('#losses').innerText = score.lost;
    document.querySelector('#ties').innerText = score.tie;
}

document.querySelectorAll('.choice-button').forEach((button) => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        const computerChoice = generateComputerChoice();
        const resultMsg = getResult(userChoice, computerChoice);
        showResult(userChoice, computerChoice, resultMsg);
    });
});

document.querySelector('#reset-button').addEventListener('click', () => {
    localStorage.removeItem('Score');
    resetScore();
    showResult();
});
