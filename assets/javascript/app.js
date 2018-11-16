// $("#hide").click(function(){
//     $("p").hide();
//     $("h1").hide();
//     $("hr").hide();
//     $("#hide").hide();
// });

var questions = [{
    "question": "What stadium was the venue for the final?",
    "option1": "Stade Francais, Paris",
    "option2": "Allianz Arena, Munich",
    "option3": "Estadio Santiago Bernabeu, Madrid",
    "option4": "Wembley Stadium, London",
    "answer": "4",
},
{
    "question": "Who was the Barcelona head coach?",
    "option1": "Pep Guardiola",
    "option2": "Carlos Queiroz",
    "option3": "Vicente Del Bosque",
    "option4": "Luis Aragones",
    "answer": "1",
},
{
    "question": "Who scored the game's opening goal?",
    "option1": "Sergio Busquets",
    "option2": "Lionel Messi",
    "option3": "Pedro Rodriguez",
    "option4": "David Villa",
    "answer": "3",
},
{
    "question": "Who scored the equalising goal for Manchester United?",
    "option1": "Ryan Giggs",
    "option2": "Nani",
    "option3": "Javier Hernandez (Chicharito)",
    "option4": "Wayne Rooney",
    "answer": "4",
},
{
    "question": "Who scored Barcelona's second goal, and was deservedly awarded the Man of the Match?",
    "option1": "David Villa",
    "option2": "Andres Iniesta",
    "option3": "Lionel Messi",
    "option4": "Xavi",
    "answer": "3",
},
]

var currentQuestion = 0;
var score = 0;
var totQuestions = question.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');

var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption){
        alert('Please select your answer');
        return;
    }
    var answer = selectedOption.nodeValue;
    if(questions[currentQuestion].answer == answer){
        score++
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return; 
    
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);