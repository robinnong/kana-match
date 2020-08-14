<template>
    <section class="animate__animated animate__fadeIn"> 
        <form action=""> 
            <div class="fieldset">
                <div>
                    <input type="radio" id="hiragana" name="type" value="hiragana" v-model="chartType" checked>
                    <label for="hiragana">Hiragana</label>
                </div>
                <div>
                    <input type="radio" id="katakana" name="type" value="katakana" v-model="chartType">
                    <label for="katakana">Katakana</label> 
                </div>  
            </div>
            <div class="fieldset"> 
                <input type="checkbox" id="basic" value="basic" v-model="checkedFilters" checked>
                <label for="basic">Basic</label>
                <input type="checkbox" id="dakuon" value="dakuon" v-model="checkedFilters">
                <label for="dakuon">Dakuon</label>
                <input type="checkbox" id="handakuon" value="handakuon" v-model="checkedFilters">
                <label for="handakuon">Handakuon</label>  
            </div>
        </form>  
        <ul> 
            <li v-for="(item, index) in chart" v-bind:key="index">
                <span class="cardKana">{{ item.kana }}</span>
                <span class="cardRomaji">{{ item.romaji }}</span>
            </li> 
        </ul>  
    </section>
</template>

<script> 
    import hiragana from './hiragana';    
    import katakana from './katakana'; 

    export default {
        name: 'Chart',
        data() {
            return {  
                chartType: 'hiragana',
                checkedFilters: ['basic']
            }
        }, 
        computed: {
            chart: function() {
                const callback = item => this.checkedFilters.includes(item.type);
                return this.chartType === 'hiragana'
                    ? hiragana.filter(item => callback(item))
                    : katakana.filter(item => callback(item)) 
            },
        },
    }
</script> 

<style lang="scss" scoped>
    section {
        position: relative;  
        max-width: 500px; 
        margin: 0 auto; 
        align-self: flex-start;
    }

    input:checked + label { font-weight: 600; }

    form {    
        font-size: 1.6rem;   
        margin-bottom: 10px;
        label { 
            margin: 5px 0;
            margin-right: 20px;
            cursor: pointer;
        }
        input {margin-right: 5px;}
        div {
            display: flex; 
            align-items: center;
        }
    }

    .fieldset { 
        padding: 5px 15px; 
        background-color: white;
        border: 1px solid #bae3ff;
        border-radius: 5px;
        &:first-of-type {margin-bottom: 5px;}
    }  

    ul {
        display: grid;
        grid-template-columns: repeat(5, minmax(50px, 100px));
        grid-auto-rows: 60px;
        grid-gap: 10px;
        li { 
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center; 
            background-color: white; 
            border-radius: 5px;
            border: 1px solid #bae3ff;  
        } 
    
        .cardKana {
            font-family: 'M PLUS Rounded 1c', sans-serif;
            font-size: 2.6rem; 
        }
        .cardRomaji {
            color: #ff9fb4;
            font-size: 1.8rem;
            font-weight: 600;
            letter-spacing: 0.2rem; 
        }
    }  

    @media (max-width: 768px) { 
        ul { 
            grid-gap: 5px;
            li { font-size: 2.4rem; }
            span:last-child {font-size: 1.4rem;}
        } 
    } 
</style>