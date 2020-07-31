<template>
    <nav @click="closeNav">   
        <div>
            <h3><span aria-hidden="true">📚</span> Flashcards</h3>
            <button @click="route('chart')">
                <span>Kana</span> 
            </button> 
            <h3><span aria-hidden="true">🎮</span> Quizes</h3>
            <button @click="route('quiz'), setQuizType('hiragana')" value="hiragana">
                <span>Hiragana</span> 
            </button> 
            <button @click="route('quiz'), setQuizType('katakana')" value="katakana">
                <span>Katakana</span> 
            </button> 
        </div>
        <p>© 2020 <a href="https://www.robinnong.com/">Robin Nong</a>.</p>
    </nav> 
</template>

<script>
    export default {
        name: 'Nav',  
        methods: {
            closeNav(e) {
                this.$emit('close-nav', e)
            },
            route(type) {
                this.$emit('set-route', type)
            },
            setQuizType(type) {
                this.$emit('set-quiz', type)
            }
        }
    } 
</script> 