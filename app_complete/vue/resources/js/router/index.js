import VueRouter from 'vue-router';
import Vue from 'vue';
import BooksComponent from "../components/book/BooksComponent";
import BookListingComponent from "../components/book/BookListingComponent";
import ContactUsComponent from "../components/static/ContactUsComponent";
import AboutUsComponent from "../components/static/AboutUsComponent";
import LoginComponent from "../components/auth/LoginComponent";
import RegisterComponent from "../components/auth/RegisterComponent";
import ConfirmationComponent from "../components/auth/ConfirmationComponent";
import store from "../store";

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
        },
        {
            name: 'register',
            path: '/register',
            component: RegisterComponent
        },
        {
            name: 'thank-you',
            path: '/thank-you',
            component: ConfirmationComponent,
            beforeEnter: (to, from, next) => {
                // we need to check the vuex for a user
                if (!Object.keys(store.getters.user).length) {
                    next("/");
                } {
                    next();
                }
            }
        }
    ]
});

/*router.beforeEach((to, from, next) => {

});*/

export default router
