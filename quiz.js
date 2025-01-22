

function checkAnswer() {
    // Function body
     let correctAnswer= "4";
     const userAnswer =document.querySelector('name');

    const feedback = document.getElementById('feedback');

    // Check if the user selected an answer
    if (userAnswer) {
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Optional: Add some visual feedback
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Optional: Add some visual feedback
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange"; // Optional: Add some visual feedback
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
