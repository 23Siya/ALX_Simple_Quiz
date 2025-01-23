

function checkAnswer() {
    // Function body
    const correctAnswer = "4";
    let userAnswer = document.querySelector('name');

    if (userAnswer) {
        if (userAnswer.value == correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        }
        else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }
    else {
        feedback.textContent="please choose something";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);

