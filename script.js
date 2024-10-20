const questions = [
    { question: "5 + 3 = ?", answer: 8 },
    { question: "12 - 4 = ?", answer: 8 },
    { question: "3 x 3 = ?", answer: 9 },
    { question: "16 ÷ 2 = ?", answer: 8 },
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
}

document.getElementById('submit-btn').addEventListener('click', function() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === questions[currentQuestionIndex].answer) {
        feedbackElement.textContent = "सही उत्तर!";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            document.getElementById('answer').value = "";
        } else {
            feedbackElement.textContent = "आपने खजाना खोज लिया!";
        }
    } else {
        feedbackElement.textContent = "गलत उत्तर, फिर से प्रयास करें!";
    }
});

// Initially show the first question
showQuestion();
