<template>
    <section class="quiz wrapper animate__animated animate__fadeIn"> 
        <p>Tap to match <span role="img" aria-hidden="true">💭</span></p>
        <div class="cardsContainer"> 
            <ul class="promptCards">
                <li v-for="card, index in promptCards">
                    <span>{{ card }}</span>
                    <div>  
                        <transition name="fade">
                            <span v-if="clicks === index" class="key">{{ index + 1 }}</span>
                        </transition>
                        <transition name="fade">
                            <span v-if="clicks > index" class="matchCard">{{ Object.keys(answerLog)[index] }}</span>
                        </transition>
                    </div>
                </li>
            </ul>            
            <ul class="answerCards">
                <li 
                v-for="card in answerCards" 
                v-bind:id=card 
                @click="setCurrentCard" :class="{disabled:answerLog[card]}">
                    <div>
                        <span>{{ card }}</span>
                    </div>
                </li>
            </ul> 
        </div> 
        <p class="round">{{ round }} / 5</p> 
        <button type="button" class="nextButton" @click="validateAnswers">Next ></button> 
    </section>
</template>

<script> 
    import hiragana from '../hiragana';    
    import katakana from '../katakana'; 

    export default {
        name: 'Quiz',
        props: ['quizType'],   
        data() {
            return { 
                clicks: 0,  
                round: 0,  
                answerKey: {}, // Format ==> {O: "お", KO: "こ"}
                answerLog: {}, // Format ==> {O: "お", KO: "こ"} 
                currentCard: "",
            }
        },
        computed: {
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
            },
        },
        watch: {
            round: function() {
                if (this.round === 6) {
                    this.showModal() 
                    this.round = 1; 
                }
                this.clicks = 0 
            }
        }, 
        methods: { 
            validateAnswers() {  
                // Checks if the user has match the pairs of kana and romaji correctly by comparing pairs to the original object 
                for (const prop in this.answerLog) { 
                    this.answerLog[prop] === this.answerKey[prop] 
                        ? this.$emit('increment-score')
                        : null ;
                } 
                this.answerKey = {};
                this.answerLog = {};
                this.round++ 
            }, 
            showModal(e){ 
                this.$emit('show-modal', e)
            },
            setCurrentCard(e) {
                if (this.clicks < 6) { 
                    this.currentCard = e.currentTarget.id;    
                    this.answerLog[e.currentTarget.id] = this.promptCards[this.clicks]; 
                    this.clicks++;   
                }
            }
        }
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
</script> 