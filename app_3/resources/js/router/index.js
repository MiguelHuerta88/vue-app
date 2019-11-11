import VueRouter from 'vue-router';
import Vue from 'vue';
import BooksComponent from "../components/book/BooksComponent";
import BookListingComponent from "../components/book/BookListingComponent";
import ContactUsComponent from "../components/static/ContactUsComponent";
import AboutUsComponent from "../components/static/AboutUsComponent";
import LoginComponent from "../components/auth/LoginComponent";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/vue-app/app_3/public/',
            component: BooksComponent
        },
        {
            name: 'book',
            path: '/vue-app/app_3/public/book/:book',
            component: BookListingComponent
        },
        {
            name: 'about',
            path: '/vue-app/app_3/public/about-us',
            component: AboutUsComponent
        },
        {
            name: 'contact',
            path: '/vue-app/app_3/public/contact-us',
            component: ContactUsComponent
        },
        {
            name: 'login',
            path: '/vue-app/app_3/public/login',
            component: LoginComponent
        }
    ]
});

/*router.beforeEach((to, from, next) => {

});*/

export default router
