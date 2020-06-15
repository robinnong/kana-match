import hiragana from './hiragana.js';

const kana = hiragana.map(letter => letter.kana);
let answerKey = []; // array of objects
let answerLog = []; // array of objects
let score = 0;
// const rows = document.getElementsByTagName("ul");
// console.log(rows) 

const flipCard = (e) => {
 
}  

// kana.forEach(char => {
//     for (let i = 0; i < char.length; i++) {
//         const node = document.createElement("li");
//         const textnode = document.createTextNode(char[i]);
//         node.addEventListener("click", flipCard, false);
//         node.appendChild(textnode);
//         document.getElementById("hiraganaList").appendChild(node);
//     }
// }); 

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

const allowDrop = (e) => {
    e.preventDefault();
} 

const onDragStart = (event) => {
    event.dataTransfer.setData('text/html', event.target.id);
    // console.log(event.target.id)
}

const dragging = (event) => {
}

const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/html");
    event.target.appendChild(document.getElementById(data)); 
    const kana = event.target.previousSibling.data;
    const romaji = event.target.innerText
    answerLog.push({kana: kana, romaji: romaji}); // pushes the object
    console.log(answerLog);
    if (answerLog.length === 6) {
        evaluateAnswers();
    }
} 
 
function evaluateAnswers () { 
    answerLog.forEach(answer=> {  
        const ref = answerKey.find(item => item.romaji === answer.romaji);
        if (ref.kana === answer.kana) {
            score++;
            console.log(answer)
            
        }
    }) 
}

const setQuestions = () => {
    answerKey = getRandomArray(hiragana, 6);   
    answerKey.forEach(index => {  
        const cards = document.createElement("li"); 
        const card = document.createTextNode(index.kana);
        const dropzone = document.createElement('div'); 
        dropzone.addEventListener("dragover", allowDrop);
        dropzone.addEventListener("drop", drop);
        cards.appendChild(card);
        cards.appendChild(dropzone);
        document.getElementById("promptCards").appendChild(cards);
    })
    const answers = getRandomArray(answerKey, answerKey.length)
    answers.forEach(index => {  
        const cards = document.createElement("li");
        cards.setAttribute("id", index.romaji)
        cards.setAttribute("draggable", "true"); 
        cards.addEventListener("dragstart", onDragStart);  
        cards.addEventListener("drag", dragging);
        const card = document.createTextNode(index.romaji);
        cards.appendChild(card);
        document.getElementById("answerCards").appendChild(cards);
    })
} 

const init = () => {
    setQuestions(); 
    document.getElementById("nextButton").addEventListener("click", function() {
        answerKey = [];
        answerLog = [];
        document.getElementById("promptCards").innerHTML = "";
        setQuestions();
    })
} 

// Define a convenience method and use it
const ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    init();
});

