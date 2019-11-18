import VueRouter from 'vue-router';
import Vue from 'vue';
import BooksComponent from "../components/book/BooksComponent";
import BookListingComponent from "../components/book/BookListingComponent";
import ContactUsComponent from "../components/static/ContactUsComponent";
import AboutUsComponent from "../components/static/AboutUsComponent";
import LoginComponent from "../components/auth/LoginComponent";
import RegisterComponent from "../components/auth/RegisterComponent";
import ConfirmationComponent from "../components/auth/ConfirmationComponent";
import ActivateUserComponent from "../components/auth/ActivateUserComponent";
import UserAccountSettingsComponent from "../components/auth/UserAccountSettingsComponent";
import store from "../store";
// import guarded routes to check
import { GUARDED_ROUTES } from "../config/guarded.js";

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
        },
        {
            name: 'activate-user',
            path: '/activate/:token',
            component: ActivateUserComponent
        },
        {
            name: 'settings',
            path: '/user/settings',
            component: UserAccountSettingsComponent
        }
    ]
});

router.beforeEach((to, from, next) => {
    // we first check that is to.name matched a gaurded route then must be
    // logged in/ contain user in state. Otherwise redirect to login page
    let found = false;
    GUARDED_ROUTES.findIndex((item) => { (item === to.name) ? found = true : found = false });

    if (found && !Object.keys(store.getters.user).length) {
        next('/login');
    } else {
        // route doesnt match a guarded route keep it going
        next();
    }
});

export default router
