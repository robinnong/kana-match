// import _ from 'lodash';
import hiragana from './hiragana.js'; 

let answerKey = []; // array of objects
let answerLog = []; // array of objects
let score = 0;
// const rows = document.getElementsByTagName("ul");
// console.log(rows)  

// Returns a randomized array, accepts the data array and desired length as parameters
const getRandomArray = (array, length) => {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*array.length);
        if (randomArray.includes(array[randomIndex])) {
            i -= 1;
        } else {
            randomArray.push(array[randomIndex]);
        }
    } 
    return randomArray; 
} 

// Effect when the card is picked up
const onDragStart = (event) => {
    event.dataTransfer.setData('text/html', event.target.id);
} 

// Effect when the card is dropped into the dropzone
const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/html");
    event.target.appendChild(document.getElementById(data)); 
    const userkana = event.target.previousSibling.data;
    const userromaji = event.target.innerText
    answerLog.push({kana: userkana, romaji: userromaji}); // pushes the object
    console.log(answerLog);
    if (answerLog.length === 6) {
        evaluateAnswers();
    }
} 

// Checks if the user has match the paris of kana and romaji correctly by comparing the pairs to the original object
function evaluateAnswers () { 
    answerLog.forEach(answer=> {  
        const ref = answerKey.find(item => item.romaji === answer.romaji);
        if (ref.kana === answer.kana) {
            score++;
            console.log(answer)
            // highlight card 
        }
    }) 
}

const setQuestions = () => {
    // Returns an array of 6 random hiragana
    answerKey = getRandomArray(hiragana, 6);  
    answerKey.forEach(index => {  
        const cards = document.createElement("li"); 
        const card = document.createTextNode(index.kana);
        const dropzone = document.createElement('div');  
        dropzone.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        dropzone.addEventListener("drop", drop);
        cards.appendChild(card);
        cards.appendChild(dropzone);
        document.getElementById("promptCards").appendChild(cards);
    })
    // Return the first array of hiragana in a random order
    const answers = getRandomArray(answerKey, answerKey.length)
    answers.forEach(index => {  
        const cards = document.createElement("li"); 
        cards.setAttribute("draggable", "true"); 
        cards.setAttribute("id", `${index.romaji}`)   
        cards.addEventListener("dragstart", onDragStart, false);   
        cards.textContent = index.romaji; 
        document.getElementById("answerCards").appendChild(cards);
    })
} 

const showChart = () => {
    document.getElementById("chart").style.display = '';
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("home").style.display = 'none';
}

const showQuiz = () => {
    document.getElementById("chart").style.display = 'none';
    document.getElementById("quiz").style.display = '';
    document.getElementById("home").style.display = 'none';
}

const flipCard = (e) => {

}

const loadChart = () => {
    const basicKana = hiragana.filter(item => item.type === "basic");
    basicKana.forEach(char => {
        const node = document.createElement("li");
        node.classList.add('animate__animated');
        node.classList.add('animate__fadeIn');
        const kanaText = document.createElement("span");
        kanaText.innerText = char.kana;
        const romajiText = document.createElement("span");
        romajiText.innerText = char.romaji;
        // node.addEventListener("click", flipCard, false);
        node.appendChild(kanaText);
        node.appendChild(romajiText);
        document.getElementById("hiraganaList").appendChild(node);
    });
} 

const init = () => { 
    setQuestions();
    loadChart();
    document.getElementById("chart").style.display = 'none';
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("chartButton").addEventListener("click", showChart);
    document.getElementById("quizButton").addEventListener("click", showQuiz);
    document.getElementById("nextButton").addEventListener("click", function() {
        answerKey = [];
        answerLog = [];
        document.getElementById("promptCards").innerHTML = "";
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
