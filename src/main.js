import './styles.css';
// import Vue from '../node_modules/vue/dist/vue.esm.js';  
import Vue from '../node_modules/vue/dist/vue.esm.browser.js'; 
import VueRouter from '../node_modules/vue-router/dist/vue-router.esm.js';
import App from './App.vue';

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
}) 
