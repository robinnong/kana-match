<template>
    <div id="app">
        <header> 
            <button @click="isOpen = !isOpen" aria-label="Toggle navigation menu">
                <i class="fas fa-hamburger" aria-hidden="true"></i>
            </button>
            <h1 @click="display = 'home'">
                Kana Match<span aria-hidden="true">🔥</span>
            </h1>
        </header> 
        <main>   
            <Nav v-bind:class="{navOpen: isOpen}"
                @close-nav="closeNav"
                @set-route="setRoute"
                @set-quiz="setQuiz"></Nav> 
            <div class="main">
                <Home v-if="display === 'home'"></Home>
                <Chart v-if="display === 'chart'"></Chart> 
                <Quiz v-if="display === 'quiz'" :quizType=quizType
                    @increment-score="addScore"
                    @show-modal="isModalOn = true"></Quiz>
            </div> 
            <transition name="fadeIn">
                <Modal v-if="isModalOn === true" :finalScore=score :result=result
                    @close-modal="closeModal"></Modal>
            </transition>
        </main> 
    </div>
</template>

<script>
    import Nav from './components/Nav';
    import Home from './components/Home'; 
    import Chart from './components/Chart'; 
    import Quiz from './components/Quiz'; 
    import Modal from './components/Modal'; 

    export default {
        name: 'app',
        components: {
            Nav,
            Home,
            Chart,
            Quiz, 
            Modal
        }, 
        data() {
            return {
                    score: 0,
                    isModalOn: false,  
                    display: "home",
                    isOpen: false, 
                    quizType: "",
                }
        },
        computed: {
            result: function() {
                return assignGrade(this.score)
            },
        }, 
        methods: {
            addScore() {
                this.score++;
                console.log("hi") 
            },
            setRoute(type) {
                this.display = type
            },
            setQuiz(type) {
                this.quizType = type
            }, 
            closeNav() { 
                this.isOpen = false;
            },   
            closeModal(e) {   
                (e.target.closest('.modalInner') === null || e.target.id === "modalButton")
                    ? this.isModalOn = false 
                    : null;  
                this.score = 0;
            }
        }
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
</script>