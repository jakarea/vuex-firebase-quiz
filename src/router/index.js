import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Quiz from '../components/Quiz.vue';
import Score from '../components/Score.vue';
import AddQuestion from '../components/AddQuestion.vue';
import QuizQuestions from '../components/QuizQuestions.vue';

const routes=[
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'quiz',
        path: '/quiz',
        component: Quiz
    },
    {
        name: 'add-quiz',
        path: '/quiz/add',
        component: AddQuestion
    }, 
    {
        name: 'quiz-questions',
        path: '/quiz/questions',
        component: QuizQuestions
    },
    {
      name: 'Score',
      path: '/score',
      component: Score
    },
    {
        name: 'home',
        path: '/',
        components: {
            default: Home,
        },
    },
    {
        path: '*',
        component: {
            template: '<h1>Page not found</h1>',
        }
    }
];

export default new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});
