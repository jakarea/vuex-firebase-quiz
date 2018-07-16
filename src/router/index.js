import Vue from 'vue';
import VueRouter from 'vue-router'
import * as firebase from 'firebase'

Vue.use(VueRouter)
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Quiz from '../components/Quiz.vue';
import Score from '../components/Score.vue';
import AddQuestion from '../components/AddQuestion.vue';
import QuizQuestions from '../components/QuizQuestions.vue';

const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    mode: 'history',
    routes: [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'quiz',
        path: '/quiz',
        component: Quiz,
        meta: {
            requiresAuth: true
        }
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
    ]
})


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router