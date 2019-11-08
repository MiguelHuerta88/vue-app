import VueRouter from 'vue-router';
import Vue from 'vue';
import BooksComponent from "../components/BooksComponent";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/vue-app/app_2/public/',
            component: BooksComponent
        }
    ]
});

export default router
