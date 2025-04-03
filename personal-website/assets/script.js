document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});


window.onload = function() {
    const riddleDiv = document.createElement('div');
    riddleDiv.style.textAlign = 'center';

    riddleDiv.innerHTML = `
        <h2 style="color:#2f7ed1;">Here's a fun riddle for you!</h2>
        <p><strong>Riddle:</strong> What comes once in a minute, twice in a moment, but never in a thousand years?</p>
        <input type="text" id="riddleAnswer" placeholder="Type your answer here..." />
        <button id="submitAnswer">Submit</button>
        <p id="responseMessage" style="color: red;"></p>
        <div id="hiddenFact" style="display: none; margin-top: 20px;">
            <h3>Hidden Fact About Me:</h3>
            <p>I enjoy listening to music🎶 while coding! It prevents boredom😜</p>
        </div>
    `;

    const container = document.querySelector('.container');
    container.insertAdjacentElement('afterend', riddleDiv);

    const submitButton = document.getElementById('submitAnswer');
    const riddleAnswer = document.getElementById('riddleAnswer');
    const responseMessage = document.getElementById('responseMessage');
    const hiddenFact = document.getElementById('hiddenFact');

    const correctAnswer = 'm';

    submitButton.addEventListener('click', function() {
        const userAnswer = riddleAnswer.value.trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            responseMessage.textContent = "✅Correct! Here's a hidden fact about me:";
            responseMessage.style.color = 'blue';
            hiddenFact.style.display = 'block';
        } else {
            responseMessage.textContent = "Oops, that's not correct. Try again!";
            responseMessage.style.color = 'red';
        }
    });
};
