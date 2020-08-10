<template>
    <div id="app">
        <header> 
            <button @click="isOpen = !isOpen" aria-label="Toggle navigation menu"> 
                <svg aria-hidden="true" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                    <path fill="#FFFFFF" d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"/>
                </svg>
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
        } else if (0 < finalScore < 15) {
            return { grade: "D", message: "Keep Studying! 😢" };
        } else if (15 < finalScore < 21) {
            return { grade: "C", message: "Keep Studying! 😁" };
        } else if (21 < finalScore < 24) {
            return { grade: "B", message: "Good Job! 😄" };
        } else if (24 < finalScore < 30) {
            return { grade: "A", message: "Excellent! 😄" };
        } else if (finalScore === 30) {
            return { grade: "A+", message: "Perfect! 🎉" };
        }
    } 
</script>