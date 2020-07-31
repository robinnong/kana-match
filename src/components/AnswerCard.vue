<template>
    <li @click="setCurrentCard" :class="{disabled:currentCard}">
        <div>
            <span>{{ card }}</span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'AnswerCard',
    props: ['currentCard', 'card'],
    methods: {
        setCurrentCard(e) {
            this.$emit('set-current-card', e)
        }
    }
}
</script>