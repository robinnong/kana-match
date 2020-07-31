<template>
    <div class="modalOuter" @click=closeModal>
        <div class="modalInner">
            <h3 class="finalMessage">{{ result.message }}</h3> 
            <p class="grade">{{ result.grade }}</p>
            <p>{{ finalScore }} of 30 matches correct</p>
            <button @click=closeModal id="modalButton">Exit</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',  
        props: ['finalScore', 'result'],
        methods: {
            closeModal(e) {
                this.$emit('close-modal', e)
            }, 
        }
    }  
</script>