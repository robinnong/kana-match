// Modules
import hiragana from './hiragana.js'; 

// Global Variables
let answerKey = []; // array of objects
let answerLog = []; // array of objects
let score = 0;
let round = 0;

// Selectors
const scoreCounter = document.getElementById("score");
const roundCounter = document.getElementById("round");

const chart = document.getElementById("chart");
const quiz = document.getElementById("quiz");
const home = document.getElementById("home");

const promptCards = document.getElementById("promptCards");
const answerCards = document.getElementById("answerCards");

const heading = document.querySelector('h1');
const nextButton = document.getElementById("nextButton");
const chartButton = document.getElementById("chartButton");
const quizButton = document.getElementById("quizButton");

const hiraganaList = document.getElementById("hiraganaList");

// Returns a randomized array, accepts the data array and desired length as parameters
const getRandomArray = (array, length) => {
    let randomArray = [];

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random()*array.length);
        if (randomArray.includes(array[index])) {
            i -= 1;
        } else {
            randomArray.push(array[index]);
        }
    } 
    return randomArray; 
} 

// Effect when the card is picked up
const onDragStart = (event) => {
    event.dataTransfer.setData('text/html', event.target.id);
    // const listitems = document.querySelectorAll('.droppable') 
    // listitems.forEach(item =>{
    //     item.childNodes[1].classList.add('glow');
    // }) 
}  

// Effect when the card is dropped into the dropzone
const drop = (event) => {
    event.preventDefault();
    
    // const listItems = document.querySelectorAll('.droppable')
    // listItems.forEach(item => {
    //     item.childNodes[1].classList.remove('glow');
    // }) 
    
    // Data transfer from item being droppped to the dropzone
    const data = event.dataTransfer.getData("text/html");
    event.target.appendChild(document.getElementById(data)); 
    const userkana = event.target.previousSibling.data;
    const userromaji = event.target.innerText;

    // Updates the answer log
    answerLog.push({kana: userkana, romaji: userromaji}); 

    // If all 6 cards have been dropped, then evaluate the matches
    answerLog.length === 6 ? evaluateAnswers() : null;
} 

// Checks if the user has match the paris of kana and romaji correctly by comparing the pairs to the original object
function evaluateAnswers () { 
    answerLog.forEach(answer => {  
        const ref = answerKey.find(item => item.romaji === answer.romaji);
        if (ref.kana === answer.kana) {
            score++;  
            scoreCounter.innerHTML = `${score}`;
            const answers = document.getElementById(answer.romaji);
            answers.style.backgroundColor = '#D4EA55';
            // console.log(answer)
            // highlight card 
        } 
    }) 
}

const setQuestions = () => {
    while (promptCards.firstChild)
    promptCards.removeChild(promptCards.firstChild);

    while (answerCards.firstChild)
    answerCards.removeChild(answerCards.firstChild);

    // Returns an array of 6 random hiragana
    answerKey = getRandomArray(hiragana, 6);  
    answerKey.forEach(index => {  
        const cards = document.createElement("li"); 
        const card = document.createTextNode(index.kana);
        const dropzone = document.createElement('div');  

        dropzone.addEventListener("dragover", function(e){
            e.preventDefault();
        }); 

        dropzone.addEventListener("dragenter", function(e) { 
            const box = e.target;
            box.classList.add("dragover");
            box.classList.remove("dragleave");
        })

        dropzone.addEventListener("dragleave", function (e) {
            const box = e.target;
            box.classList.remove("dragover");
            box.classList.add("dragleave");
        })

        dropzone.addEventListener("drop", drop);
        cards.classList.add("droppable")
        cards.appendChild(card);
        cards.appendChild(dropzone);
        promptCards.appendChild(cards);
    })
    // Return the first array of hiragana in a random order
    const answers = getRandomArray(answerKey, answerKey.length)
    answers.forEach(index => {  
        const cards = document.createElement("li"); 
        cards.setAttribute("draggable", "true"); 
        cards.setAttribute("id", `${index.romaji}`)   
        cards.addEventListener("dragstart", onDragStart, false);    
        cards.textContent = index.romaji; 
        answerCards.appendChild(cards);
    })
} 

// Switch page content between Home, Chart and Quiz
const switchDisplay = (type) => {    
    switch(type) {
        case 'home' :
            chart.style.display = 'none';
            quiz.style.display = 'none';
            home.style.display = '';
            break;

        case 'chart' :
            loadChart();
            chart.style.display = '';
            quiz.style.display = 'none';
            home.style.display = 'none';
            break;

        case 'quiz' :
            setQuestions();
            scoreCounter.innerHTML = `${score}`;
            roundCounter.innerHTML = `${round} / 10`;

            chart.style.display = 'none';
            quiz.style.display = '';
            home.style.display = 'none';
            break; 
    } 
} 

// Increments the round counter when user clicks Next button
const incrementRound = () => {
    round = (round < 10) ? round + 1 : 0;
    roundCounter.innerHTML = `${round} / 10`;
    // Reset the score after round and display a percentage accuracy at the end of the quiz as a modal
}

const loadChart = () => {
    while (hiraganaList.firstChild)
    hiraganaList.removeChild(hiraganaList.firstChild);

    const basicKana = hiragana.filter(item => item.type === "basic");
    basicKana.forEach(char => {
        const node = document.createElement("li");
        node.classList.add('animate__animated');
        node.classList.add('animate__fadeIn');

        const kanaText = document.createElement("span");
        kanaText.innerText = char.kana; 
        const romajiText = document.createElement("span");
        romajiText.innerText = char.romaji;  

        node.appendChild(kanaText);
        node.appendChild(romajiText);
        
        hiraganaList.appendChild(node);
    });
} 

const init = () => { 
    switchDisplay('home');
    heading.addEventListener("click", () => switchDisplay('home'));
    chartButton.addEventListener("click", () => switchDisplay('chart'));
    quizButton.addEventListener("click", () => switchDisplay('quiz'));

    // On clicking Next button: reset the DOM, clear answer log, and display the next question set 
    nextButton.addEventListener("click", function() {
        answerKey = [];
        answerLog = [];

        incrementRound()

        while (answerCards.firstChild)
        answerCards.removeChild(answerCards.firstChild); 

        promptCards.innerHTML = "";
        setQuestions();
    });
}
// Define a convenience method and use it
const ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    init();
});

