const questions = [
    {
        question: 'What is the keyword used to define a function in Python?',
        answers: [
            { text: 'func', correct: false },
            { text: 'def', correct: true },
            { text: 'function', correct: false },
            { text: 'define', correct: false }
        ]
    },
    {
        question: 'Which data type is used to store true or false values in Python?',
        answers: [
            { text: 'int', correct: false },
            { text: 'str', correct: false },
            { text: 'bool', correct: true },
            { text: 'list', correct: false }
        ]
    },
    {
        question: 'What is the correct way to create a list in Python?',
        answers: [
            { text: 'list = []', correct: true },
            { text: 'list = {}', correct: false },
            { text: 'list = ()', correct: false },
            { text: 'list = <>', correct: false }
        ]
    },
    {
        question: 'How do you start a comment in Python?',
        answers: [
            { text: '//', correct: false },
            { text: '#', correct: true },
            { text: '/*', correct: false },
            { text: '<!--', correct: false }
        ]
    },
    {
        question: 'Which built-in function is used to get the length of a list in Python?',
        answers: [
            { text: 'length()', correct: false },
            { text: 'len()', correct: true },
            { text: 'size()', correct: false },
            { text: 'count()', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (questions.length > currentQuestionIndex) {
        setNextQuestion();
    } else {
        startQuiz();
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hidden');
    nextButton.innerText = 'Next Question';
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        selectedButton.style.backgroundColor = 'green';
    } else {
        selectedButton.style.backgroundColor = 'red';
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        button.removeEventListener('click', selectAnswer);
        if (button.dataset.correct === 'true') {
            button.style.backgroundColor = 'green';
        }
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hidden');
    } else {
        nextButton.innerText = 'Restart';
        nextButton.classList.remove('hidden');
    }
}

startQuiz();
