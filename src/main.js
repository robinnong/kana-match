// import _ from 'lodash';
// import './styles.css';
import hiragana from './hiragana.js'; 
import assignGrade from './assignGrade.js'; 

// Global Variables
let answerKey = {};  // Format ==> {O: "お", KO: "こ"}
let answerLog = {};  // Format ==> {O: "お", KO: "こ"}
let score = 0;
let round = 0; 

// Selectors for DOM elements
const scoreCounter = document.querySelector(".score");
const roundCounter = document.querySelector(".round");

const chart = document.querySelector(".chart");
const quiz = document.querySelector(".quiz");
const home = document.querySelector(".home");

const promptCards = document.querySelector(".promptCards");
const answerCards = document.querySelector(".answerCards");

const heading = document.querySelector('h1');
const nextButton = document.querySelector(".nextButton");
const chartButton = document.querySelector(".chartButton");
const quizButton = document.querySelector(".quizButton");

const radioButtons = document.getElementsByName("sound");
const hiraganaList = document.querySelector(".hiraganaList");
const modal = document.querySelector('.modal');

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

// Effect when a card is picked up
const onDragStart = (event) => event.dataTransfer.setData('text/html', event.target.id);  

// Effect when a card is dropped into the dropzone
const drop = (event) => {
    event.preventDefault(); 
    const currentCard = event.target;
    // Data transfer from item being droppped to the dropzone
    const data = event.dataTransfer.getData("text/html");
    currentCard.appendChild(document.getElementById(data)); 
    const userkana = currentCard.previousSibling.data;
    const userromaji = currentCard.innerText;
    
    // Updates an object containing a log of user's past matches. Allows a match to be updated if the user wants to change their answer
    answerLog[userromaji] = userkana;  
} 

// Checks if the user has match the pairs of kana and romaji correctly by comparing pairs to the original object
function evaluateAnswers () { 
    for (const prop in answerLog) {
        if (answerLog[prop] === answerKey[prop]) { 
            score++;   
            const answers = document.getElementById(prop);
            // Highlights the correct answers in green
            answers.style.backgroundColor = '#D4EA55'; 
        } else {
            const answers = document.getElementById(prop);
            // Highlights the incorrect answers in red
            answers.style.backgroundColor = 'tomato'; 
        }
    } 
}

const setQuestions = () => {
    // Clears the prompt cards' child elements
    while (promptCards.firstChild)
    promptCards.removeChild(promptCards.firstChild);
    // Clears the answer cards' child elements
    while (answerCards.firstChild)
    answerCards.removeChild(answerCards.firstChild);
    // Returns an array of 6 random hiragana
    const promptSet = getRandomArray(hiragana, 6);  
    // Populates the container for prompt cards 
    promptSet.forEach(index => {  
        answerKey[index.romaji] = index.kana; 
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
        // dropzone.addEventListener("click", drop);

        cards.classList.add("droppable")
        cards.appendChild(card);
        cards.appendChild(dropzone);
        promptCards.appendChild(cards);
    })
    
    // Return the first array of hiragana in a random order
    const answers = getRandomArray(promptSet, promptSet.length)
    answers.forEach(index => {  
        const cards = document.createElement("li"); 
        cards.setAttribute("draggable", "true"); 
        cards.setAttribute("id", `${index.romaji}`)   
        cards.addEventListener("dragstart", onDragStart, false); 
        // cards.addEventListener("click", getCardData, false);   
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
            loadChart("basic");
            chart.style.display = '';
            quiz.style.display = 'none';
            home.style.display = 'none';
            break;

        case 'quiz' :
            setQuestions(); 
            roundCounter.innerHTML = `${round} / 5`;
            chart.style.display = 'none';
            quiz.style.display = '';
            home.style.display = 'none';
            break; 
    } 
}  

// Increments the round counter when user clicks Next button
const incrementRound = () => { 
    if (round === 5) {
        modal.classList.add('visible');
        scoreCounter.innerText = score; 
        assignGrade(score);
        round = 0;
        score = 0;
    } else {
        round++; 
    }
    roundCounter.innerHTML = `${round} / 5`;
}

const loadChart = (kanaType) => {
    while (hiraganaList.firstChild)
    hiraganaList.removeChild(hiraganaList.firstChild);

    const kanaList = hiragana.filter(item => item.type === kanaType);
    kanaList.forEach(char => {
        const node = document.createElement("li");
        node.classList.add('animate__animated');
        node.classList.add('animate__fadeIn');

        const card = 
        `<div class="cardFront">
            <span>${char.kana}</span> 
        </div>
        <div class="cardBack"> 
            <span>${char.romaji}</span>
        </div>`  

        node.innerHTML = card; 
        
        hiraganaList.appendChild(node);
    });
} 

const init = () => {   
    // When user clicks outside of the modal, close modal
    modal.addEventListener('click', function (e) {  
        e.target.closest('.modalInner') === null ? this.classList.remove('visible') : null; 
    });

    //When user clicks the escape key while modal is open, close modal
    window.addEventListener('keydown', function (e) {
        e.key === 'Escape' ? modal.classList.remove('visible') : null;
    }); 

    switchDisplay('home');
    heading.addEventListener("click", () => switchDisplay('home'));
    chartButton.addEventListener("click", () => switchDisplay('chart'));
    quizButton.addEventListener("click", () => switchDisplay('quiz'));

    radioButtons.forEach(button => {
        button.addEventListener("click", function(event) { 
            const userSelection = event.target.value;
            loadChart(userSelection);
        })
    }) 

    // On clicking Next button: reset the DOM, clear answer log, and display the next question set 
    nextButton.addEventListener("click", function() {
        evaluateAnswers()

        setTimeout(()=>{
            answerKey = {};
            answerLog = {};
    
            while (answerCards.firstChild)
            answerCards.removeChild(answerCards.firstChild); 
            
            promptCards.innerHTML = "";
            incrementRound();
            setQuestions();
        }, 1000)
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

