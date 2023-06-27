//your JS code here.
function saveProgress(option) {
  // Retrieve the current progress from sessionStorage or initialize an empty array
  let progress = JSON.parse(sessionStorage.getItem('progress')) || [];

  // Add the selected option to the progress array
  progress.push(option);

  // Save the updated progress back to sessionStorage
  sessionStorage.setItem('progress', JSON.stringify(progress));
}

// Function to retrieve progress from sessionStorage
function getProgress() {
  // Retrieve the progress from sessionStorage
  let progress = JSON.parse(sessionStorage.getItem('progress')) || [];

  // Return the progress array
  return progress;
}

// Function to save score in localStorage
function saveScore(score) {
  // Save the score to localStorage
  localStorage.setItem('score', score.toString());
}

// Function to retrieve score from localStorage
function getScore() {
  // Retrieve the score from localStorage
  let score = localStorage.getItem('score');

  // Return the score if it exists, otherwise return 0
  return score ? parseInt(score) : 0;
}

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
