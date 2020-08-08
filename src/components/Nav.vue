<template>
    <nav @click="closeNav">   
        <div>
            <h3><span aria-hidden="true">📚</span> Charts</h3>
            <router-link :to="{ name: 'chart' }">Kana</router-link>
            <h3><span aria-hidden="true">🎮</span> Quizes</h3>
            <router-link :to="{ name: 'quiz', params: { type: 'hiragana' } }">Hiragana</router-link>
            <router-link :to="{ name: 'quiz', params: { type: 'katakana' } }">Kanakana</router-link>  
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
            }
        }
    } 
</script> 