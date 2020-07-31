<template>
    <section class="chart animate__animated animate__fadeIn"> 
        <form action="" class="chartOptions"> 
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
        <ul class="hiraganaList"> 
            <li v-for="(item, index) in chart" v-bind:key="index">
                <p class="cardFront">{{ item.kana }}</p>
                <p class="cardBack">{{ item.romaji }}</p>
            </li> 
        </ul>  
    </section>
</template>

<script> 
    import hiragana from '../hiragana';    
    import katakana from '../katakana'; 

    export default {
        name: 'Chart',
        data(){
            return{ 
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