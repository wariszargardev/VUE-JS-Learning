import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import BookListingView from "@/views/book/BookListingView";
import BookDetailView from "@/views/book/BookDetailView";
import BookDetailPropsView from "@/views/book/BookDetailPropsView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/books',
        name: 'BookListingView',
        component: BookListingView
    },
    {
        path: '/book-info/:id',
        name: 'BookDetailView',
        component: BookDetailView
    },
    {
        path: '/book-details/:id',
        name: 'BookDetailPropsView',
        component: BookDetailPropsView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
