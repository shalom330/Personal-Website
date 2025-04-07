document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});



let currentRiddleIndex = 0;
let score = 0;

function showRiddle() {
    if (currentRiddleIndex < riddles.length) {
        const currentRiddle = riddles[currentRiddleIndex];
        document.getElementById("riddle-text").textContent = currentRiddle.question;

        // Clear any previous options
        document.getElementById("options").innerHTML = '';

        // Display the options
        currentRiddle.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            document.getElementById("options").appendChild(button);
        });
    } else {
        document.getElementById("riddle-text").textContent = 'Game Over! Your score is: ' + score;
        document.getElementById("final-score").textContent = 'Final Score: ' + score;
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = riddles[currentRiddleIndex].answer;

    if (selectedOption.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        document.getElementById("message").textContent = "Correct! 🎉";
        document.getElementById("message").className = "message correct";
    } else {
        document.getElementById("message").textContent = "Wrong answer! Try again.";
        document.getElementById("message").className = "message wrong";
    }

    currentRiddleIndex++;
    setTimeout(showRiddle, 1000);
}

// Start the game
showRiddle();