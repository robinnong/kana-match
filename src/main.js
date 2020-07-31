import './styles.css';  
import Vue from '../node_modules/vue/dist/vue.esm.browser.js'; 
import VueRouter from '../node_modules/vue-router/dist/vue-router.esm.js';
import App from './components/App.vue';
import Home from './components/Home.vue'
import Chart from './components/Chart.vue';
import Quiz from './components/Quiz.vue';

Vue.use(VueRouter) 
 
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { 
            path: '/', 
            name: 'home', 
            component: Home 
        },
        { 
            path: '/chart', 
            name: 'chart', 
            component: Chart 
        },
        { 
            path: '/quiz/:type', 
            name: 'quiz', 
            component: Quiz, 
            props: true 
        },
    ]
})

const app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
 