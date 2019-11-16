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
            path: '/',
            component: BooksComponent
        },
        {
            name: 'book',
            path: '/book/:book',
            component: BookListingComponent
        },
        {
            name: 'about',
            path: '/about-us',
            component: AboutUsComponent
        },
        {
            name: 'contact',
            path: '/contact-us',
            component: ContactUsComponent
        },
        {
            name: 'login',
            path: '/login',
            component: LoginComponent
        }
    ]
});

/*router.beforeEach((to, from, next) => {

});*/

export default router
