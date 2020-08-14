<template>
    <section class="wrapper animate__animated animate__fadeIn"> 
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
                            <span v-if="clicks > index">{{ Object.keys(answerLog)[index] }}</span>
                        </transition>
                    </div>
                </li>
            </ul>            
            <ul class="answerCards">
                <AnswerCard 
                    v-for="(card, index) in answerCards" 
                    v-bind:id=card 
                    v-bind:key=index
                    :card=card
                    :currentCard="answerLog[card]" 
                    @set-current-card="setCurrentCard">
                </AnswerCard>
            </ul> 
        </div> 
        <p class="round">{{ round }} / 5</p> 
        <button type="button" @click="validateAnswers">Next ></button> 
    </section>
</template>

<script> 
    import AnswerCard from './AnswerCard';
    import hiragana from './hiragana';    
    import katakana from './katakana'; 

    export default {
        name: 'Quiz',
        components: {
            AnswerCard,
        }, 
        props: ['type'],   
        data() {
            return { 
                clicks: 0,  
                round: 0,  
                answerKey: {}, // Format ==> {O: "お", KO: "こ"}
                answerLog: {}, // Format ==> {O: "お", KO: "こ"} 
                currentCard: "",
                isCorrect: false,
            }
        },
        computed: {
            promptSet: function () {
                const set = this.type === 'hiragana'
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
                    this.isCorrect = true
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

<style lang="scss" scoped>
    section { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        li {
            background-color: rgb(255, 255, 255);
            height: 100%;
            border-radius: 5px;
            border: 1px solid rgb(186, 227, 255);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; 
        } 
    } 

    .cardsContainer {  
        height: 100%;
        margin: 30px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap; 
    } 

    ul {
        width: calc(50% - 50px);   
        flex: 1 0 250px; 
        display: grid;
        grid-gap: 10px;
        padding: 0 20px;
        margin-bottom: 20px;
    }

    .promptCards {
        font-size: 2.4rem;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        grid-template-columns: repeat(3, minmax(100px, 1fr));
        grid-auto-rows: 100px;   
        div { 
            position: relative;
            margin-top: 5px;
            height: 40%;
            width: 80%;
            border-radius: 5px;
            border: 1px dashed #949494; 
            transition: all 0.2s; 
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem; 
        }  
    }

    .answerCards {
        margin: auto;
        font-size: 2rem;
        grid-template-columns: repeat(3, minmax(100px, 1fr));
        grid-auto-rows: 60px; 
        li {   
            box-shadow: 0px 0px 8px 3px #00a9dd1c;
            transition: all 0.3s;
            cursor: pointer;
            &:hover {background-color: #eefaff;} 
        } 
    }

    .key {
        position: absolute;
        top: 3px;
        left: 0;
        right: 0;

        color: white;
        font-size: 1.6rem;
        width: 30px;
        height: 30px;
        margin: 0 auto;
        border-radius: 50%;
        background-color: #ff85aa;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {  
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px; 
        background-color: #ff85aa;
        box-shadow: 0 0 10px 2px rgba(231, 122, 155, 0.363);
        &:focus,
        &:hover {background-color: #e77a9b;}
    }
</style>