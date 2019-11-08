import VueRouter from 'vue-router';
import Vue from 'vue';
import BooksComponent from "../components/BooksComponent";
//import BookListingComponent from "../components/BookListingComponent";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/vue-app/app_2/public/',
            component: BooksComponent
        },
        /*{
            name: 'book',
            path: '/vue-app/app_2/public/book/:book',
            component: BookListingComponent
        }*/
    ]
});

export default router
