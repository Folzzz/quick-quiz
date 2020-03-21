const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = 
[
    {
        question: "Who is the president of Nigeria?",
        choice1: "Buhari",
        choice2: "Atiku",
        choice3: "Sanusi",
        answer: 1
    },
    {
        question: "What is the extension for an html file?",
        choice1: ".script",
        choice2: ".html",
        choice3: ".css",
        answer: 2
    },    
    {
        question: "Which virus is currently causing a pandemic?",
        choice1: "malaria",
        choice2: "cholera",
        choice3: "coronavirus",
        answer: 3
    },
    {
        question: "JayJay Okocha is a....",
        choice1: "footballer",
        choice2: "musician",
        choice3: "teacher",
        answer: 1
    },
    {
        question: "Which is not a body part",
        choice1: "head",
        choice2: "hand",
        choice3: "handle",
        answer: 3
    },
    {
        question: "What year did Nigeria gain independence?",
        choice1: "1961",
        choice2: "1962",
        choice3: "1960",
        answer: 3
    },
    {
        question: "Who is the current president of USA?",
        choice1: "Donald Trump",
        choice2: "Donald Duke",
        choice3: "Donald Pitt",
        answer: 1
    },
    {
        question: "The social media app 'twitter' is represented with which animal?",
        choice1: "bird",
        choice2: "lion",
        choice3: "tiger",
        answer: 1
    },
    {
        question: "LGBT means ?",
        choice1: "lesbian, gay, bisexual, transgender",
        choice2: "land, grind, blow, tip",
        choice3: "i don't know",
        answer: 1
    },
    {
        question: "The reward for labour is ?",
        choice1: "rent",
        choice2: "wages",
        choice3: "growth",
        answer: 2
    },
    {
        question: "The popular book series Harry Potter was written by ?",
        choice1: "J.K. Rowlings",
        choice2: "James Carter",
        choice3: "Hardley Chase",
        answer: 1
    },
    {
        question: "Who is the current manager of Chelsea fc?",
        choice1: "Arteta",
        choice2: "Frank Lampard",
        choice3: "Jose Mourinho",
        answer: 2
    },
    {
        question: "What is the extension of css file?",
        choice1: ".script",
        choice2: ".js",
        choice3: ".css",
        answer: 3
    },
    {
        question: "What is the extension of a javascript file?",
        choice1: ".html",
        choice2: ".css",
        choice3: ".js",
        answer: 3
    },
    {
        question: "Who is the former president of Nigeria?",
        choice1: "Goodluck Jonathan",
        choice2: "Olusegun Obasonjo",
        choice3: "Abubakar Atiku",
        answer: 1
    },
]

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => 
{

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS)
    {
        localStorage.setItem("mostRecentScore", score);
        return window.localStorage.assign('/highscore.html');
    };

    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS ;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" * number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect" ;

        if(classToApply === "correct"){
            incrementScore(CORRECT_BONUS);
        };

        getNewQuestion();
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();