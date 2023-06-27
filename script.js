// Do not change code above this line

// Array to store user answers
const userAnswers = [];

// Function to handle radio button selection
function handleSelection(event) {
  const selectedOption = event.target.value;
  const questionIndex = event.target.name.split('-')[1];
  userAnswers[questionIndex] = selectedOption;

  // Save the selected option to progress in sessionStorage
  saveProgress(selectedOption);
}

// Add event listeners to radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', handleSelection);
});

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Calculate the score
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  // Save the score to localStorage
  saveScore(score);

  // Display the score to the user
  const scoreElement = document.createElement('p');
  scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
  questionsElement.appendChild(scoreElement);

  // Disable the form after submission
  submitButton.disabled = true;
}

// Add event listener to submit button
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', handleSubmit);

// Do not change code below this line
// This code will just display the questions to the screen
const questionsElement = document.getElementById('questions');

function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement('div');
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement('input');
      choiceElement.setAttribute('type', 'radio');
      choiceElement.setAttribute('name', `question-${i}`);
      choiceElement.setAttribute('value', choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute('checked', true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
