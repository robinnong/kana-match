// import './styles.css';
// import Vue from '../node_modules/vue/dist/vue.esm.js';  
import Vue from '../node_modules/vue/dist/vue.esm.browser.js'; 
import hiragana from './hiragana.js';    
import katakana from './katakana.js';

// Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    data: { 
        answerKey: {}, // Format ==> {O: "お", KO: "こ"}
        answerLog: {}, // Format ==> {O: "お", KO: "こ"}
        answerCards: [],
        promptCards: [],
        key: 0,
        round: 1, 
        score: 0,
        currentMatch: 0, 
        currentCard: "",
        isModalOn: false,  
        display: "home",
        isOpen: false,
        quizType: "",
        chartType: 'hiragana',
        checkedFilters: ['basic']
    },  
    computed: {
        result: function() {
            return assignGrade(this.score)
        },
        chart: function() {
            return this.chartType === 'hiragana'
                ? hiragana.filter(item => this.checkedFilters.includes(item.type))
                : katakana.filter(item => this.checkedFilters.includes(item.type)) 
        }
    },
    methods: {
        closeNav: function() { 
            this.isOpen = false;
        }, 
        getQuizType: function(e){
            this.quizType = e.currentTarget.value;
            this.loadQuiz();
        },
        loadQuiz: function() {  
            this.display = 'quiz';  
            // Returns an array of 6 random hiragana  
            const promptSet = this.quizType === 'hiragana'
                ? getRandomArray(hiragana, 6)
                : getRandomArray(katakana, 6)
            // Set current round's answer key
            promptSet.forEach(index => this.answerKey[index.romaji] = index.kana);
            this.promptCards = promptSet.map(item => item.kana); 
            this.answerCards = getRandomArray(promptSet, promptSet.length).map(item => item.romaji); 
        }, 
        evaluateAnswer: function() {
            evaluateAnswers();    
            if (this.round === 5) {         
                this.isModalOn = true;
                this.result = assignGrade(this.score); 
                this.round = 1;
            } else {
                app.round++;
            }  
            this.loadQuiz();
            this.currentMatch = 0; 
        },
        closeModal: function(e) {  
            e.target.closest('.modalInner') === null ? this.isModalOn = false : null;  
            this.score = 0;
        },
        setCurrentCard: function(e) {
            if (this.currentMatch < 6) {
                this.currentCard = e.currentTarget.id;    
                this.answerLog[e.currentTarget.id] = this.promptCards[this.currentMatch]; 
                this.currentMatch++;  
            }
        }
    }
})

// Checks if the user has match the pairs of kana and romaji correctly by comparing pairs to the original object
function evaluateAnswers() {  
    for (const prop in app.answerLog) { 
        if (app.answerLog[prop] === app.answerKey[prop]) { 
            app.score++;   
        }
    }     
    app.answerKey = {};
    app.answerLog = {};
} 

// Returns a randomized array, accepts the data array and desired length as parameters
function getRandomArray (array, length) {
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
    } else if (finalScore === 30) {
        return { grade: "A+", message: "Perfect! 🎉" };
    }
}  