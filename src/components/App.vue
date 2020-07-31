<template>
    <div id="app">
        <header> 
            <button @click="isOpen = !isOpen" aria-label="Toggle navigation menu">
                <img src="../assets/menu-24px.svg" aria-hidden="true"></img> 
            </button>
            <router-link :to="{ name: 'home' }">
                <h1>Kana Match<span aria-hidden="true">🔥</span></h1>
            </router-link>
        </header> 
        <main>   
            <Nav v-bind:class="{navOpen: isOpen}" @close-nav="closeNav"></Nav> 
            <div class="main">
                <router-view class="view" 
                    @show-modal="isModalOn = true"
                    @increment-score="() => score++">
                </router-view> 
            </div> 
            <transition name="fadeIn">
                <Modal v-if="isModalOn === true" 
                    :finalScore=score 
                    :result=result 
                    @close-modal="closeModal">
                </Modal>
            </transition>
        </main> 
    </div>
</template> 
<script>
    import Nav from './Nav';  
    import Modal from './Modal';  

    export default {
        name: 'app',
        components: {
            Nav,   
            Modal
        }, 
        data() {
            return {
                score: 0,
                isModalOn: false,   
                isOpen: false,  
            }
        },
        computed: {
            result: function() {
                return assignGrade(this.score)
            },
        }, 
        methods: {   
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