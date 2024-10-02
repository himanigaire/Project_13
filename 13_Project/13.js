const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "What is the chemical symbol for water?",
        a: "O2",
        b: "H2O",
        c: "CO2",
        d: "NaCl",
        correct: "b"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        a: "Mark Twain",
        b: "William Shakespeare",
        c: "Charles Dickens",
        d: "Leo Tolstoy",
        correct: "b"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "Japan",
        c: "India",
        d: "South Korea",
        correct: "b"
    },
    {
        question: "Which element is essential for respiration?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon Dioxide",
        d: "Helium",
        correct: "a"
    },
    {
        question: "What year did World War II end?",
        a: "1942",
        b: "1945",
        c: "1950",
        d: "1939",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Home Tool Markup Language",
        d: "Hyper Tech Markup Language",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    }
];
// we are creating an array [] of objects {}, each object contains a question, 4 answers and the correct answer in each.

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;//this will keep track of the current question and since arrays start at 0, we start at 0.
let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    //function called so when the answers are loaded, none of them are selected.
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}//Fist of all, questions and answers are loaded into the DOM.

function deselectAnswers() {
    answerEls.forEach(ans => ans.checked = false);
}// Then we deselect all the answers so that the user can only select one answer at a time.

function getSelected() {
    let answer;
    answerEls.forEach(ans => {
        if (ans.checked) {
            answer = ans.id;
        }
    });
    return answer;
}
//after we deselect the answers, we need to check which answer the user has selected.

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
// at last, we add an event listener to the submit button, so that when the user clicks on it, the answer is checked and the next question is loaded. If the user has answered all the questions, the score is displayed and the user can reload the page to try again.