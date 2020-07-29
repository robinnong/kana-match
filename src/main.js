// import './styles.css';
// import Vue from '../node_modules/vue/dist/vue.esm.js';  
import Vue from '../node_modules/vue/dist/vue.esm.browser.js'; 
import hiragana from './hiragana.js';    
import katakana from './katakana.js'; 

const app = new Vue({
    el: '#app', 
    data: { 
        answerKey: {}, // Format ==> {O: "お", KO: "こ"}
        answerLog: {}, // Format ==> {O: "お", KO: "こ"}
        key: 0,
        round: 1, 
        score: 0,
        currentMatch: 0, 
        currentCard: "",
        isModalOn: false,  
        display: "home",
        isOpen: false,
        isClicked: false,
        quizType: "",
        chartType: 'hiragana',
        checkedFilters: ['basic']
    },  
    computed: {
        result: function() {
            return assignGrade(this.score)
        },
        chart: function() {
            const callback = item => this.checkedFilters.includes(item.type);
            return this.chartType === 'hiragana'
                ? hiragana.filter(item => callback(item))
                : katakana.filter(item => callback(item)) 
        },
        promptSet: function () {
            const set = this.quizType === 'hiragana'
                ? getRandomArray(hiragana, 6)
                : getRandomArray(katakana, 6)
            set.forEach(index => this.answerKey[index.romaji] = index.kana);
            return set;
        },
        promptCards: function() {
            return this.promptSet.map(item => item.kana);  
        },
        answerCards: function() {
            return getRandomArray(this.promptSet, this.promptSet.length).map(item => item.romaji);
        }
    },
    methods: {
        closeNav: function() { 
            this.isOpen = false;
        },  
        evaluateAnswer: function() {
            // Checks if the user has match the pairs of kana and romaji correctly by comparing pairs to the original object
            for (const prop in app.answerLog) {
                this.answerLog[prop] === this.answerKey[prop] ? app.score++ : null ;
            }
            if (this.round === 5) {         
                this.isModalOn = true;
                this.round = 0;
            }  
            this.round++;
            this.currentMatch = 0; 
            this.answerKey = {};
            this.answerLog = {};
        },
        closeModal: function(e) {   
            (e.target.closest('.modalInner') === null || e.target.id === "modalButton")
                ? this.isModalOn = false 
                : null;  
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