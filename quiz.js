
// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    if (userAnswer) {
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            
            feedback.textContent = "That's incorrect. Try again!";
          
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
       
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
