import VueRouter from 'vue-router';
import Vue from 'vue';
import BooksComponent from "../components/BooksComponent";
import BookListingComponent from "../components/BookListingComponent";
import ContactUsComponent from "../components/ContactUsComponent";
import AboutUsComponent from "../components/AboutUsComponent";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/vue-app/app_2/public/',
            component: BooksComponent
        },
        {
            name: 'book',
            path: '/vue-app/app_2/public/book/:book',
            component: BookListingComponent
        },
        {
            name: 'about',
            path: '/vue-app/app_2/public/about-us',
            component: AboutUsComponent
        },
        {
            name: 'contact',
            path: '/vue-app/app_2/public/contact-us',
            component: ContactUsComponent
        }
    ]
});

export default router
