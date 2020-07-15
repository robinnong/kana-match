// import _ from 'lodash';
// import './styles.css';
import hiragana from './hiragana.js';   
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
// Global Variables
let answerKey = {};  // Format ==> {O: "お", KO: "こ"}
let answerLog = {};  // Format ==> {O: "お", KO: "こ"} 

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})  

const app = new Vue({
    el: '#app',
    data: {
        chart: {}, 
        answerCards: [],
        promptCards: [],
        round: 0, 
        score: 0,
        result: {},
        isModalOn: false,
        currentCard: "",
        currentMatch: 0,
        key: 0,
    },
    methods: {
        // Displays chart type based on user's selection  
        loadChart: function(kanaType) {
            this.chart = hiragana.filter(item => item.type === kanaType);
        },
        changeChart: function(e) {
            app.loadChart(e.target.value);
        },
        loadQuiz: function() {
            // Returns an array of 6 random hiragana  
            const promptSet = getRandomArray(hiragana, 6); 
            this.promptCards = promptSet;
            // Set current round's answer key
            promptSet.forEach(index => answerKey[index.romaji] = index.kana);
            this.answerCards = getRandomArray(promptSet, promptSet.length);
        }, 
        evaluateAnswer: function() {
            if (this.round === 5) {         
                this.isModalOn = true;
                this.result = assignGrade(this.score); 
            } 
            this.round++;  
        },
        closeModal: function(e) {
            // When user clicks outside of the modal, close modal 
            e.target.closest('.modalInner') === null ? this.isModalOn = false : null;  
        },
        setCurrentCard: function(e) {
            console.log(e.target);
            this.currentCard = e.target.id;
            console.log(this.currentCard)
        }
    }
})

function assignGrade(finalScore) {
    if (finalScore === 0) {
        return { grade: "F", message: "Keep Studying! 😢" };
    } else if (finalScore > 0 && finalScore < 15) {
        return { grade: "D", message: "Keep Studying! 😢" };
    } else if (finalScore > 15 && finalScore < 21) {
        return { grade: "C", message: "Keep Studying! 😁" };
    } else if (finalScore > 21 && finalScore < 24) {
        return { grade: "B", message: "Good Job! 😄" };
    } else if (finalScore > 24 && finalScore < 30) {
        return { grade: "A", message: "Excellent! 😄" };
    } else if (finalScore === 100) {
        return { grade: "A+", message: "Perfect! 🎉" };
    }
}

// Checks if the user has match the pairs of kana and romaji correctly by comparing pairs to the original object
function evaluateAnswers () { 
    for (const prop in answerLog) {
        const answer = document.getElementById(prop);
        if (answerLog[prop] === answerKey[prop]) { 
            score++;   
            answer.style.backgroundColor = '#D4EA55'; // Highlights the correct answers
        } else {
            answer.style.backgroundColor = 'tomato'; // Highlights the incorrect answers
        }
    } 
} 

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

//     // Updates an object containing a log of user's past matches. Allows a match to be updated if the user wants to change their answer
//     answerLog[userromaji] = userkana;   


// Switch page content between Home, Chart and Quiz
const switchDisplay = (type) => {    
    switch(type) {
        // case 'home' : 
        //     break;

        case 'chart' : 
            app.loadChart("basic"); 
            break;

        // case 'quiz' :
        //     // setQuestions();   
        //     break; 
    } 
}  

const init = () => {    
    app.loadQuiz();

    // When user clicks the escape key while modal is open, close modal
    // window.addEventListener('keydown', function(e) {
    //     e.key === 'Escape' ? modal.classList.remove('visible') : null;
    // }); 

    switchDisplay('chart'); 
    // heading.addEventListener("click", () => switchDisplay('home'));
    // chartButton.addEventListener("click", () => switchDisplay('chart'));
    // quizButton.addEventListener("click", () => switchDisplay('quiz'));

    // On clicking Next button: reset the DOM, clear answer log, and display the next question set 
    // nextButton.addEventListener("click", function() {
    //     evaluateAnswers()

    //     setTimeout(()=>{
    //         answerKey = {};
    //         answerLog = {};  
    //         incrementRound();
    //         setQuestions();
    //     }, 1000)
    // });
}
// Define a convenience method and use it
const ready = callback => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    init();
});

