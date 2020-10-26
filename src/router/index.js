import Vue from 'vue'
import VueRouter from 'vue-router'
import MyCart from '../views/MyCart'
import Checkout from "../views/Checkout"
import HomePage from "../views/Home"

Vue.use(VueRouter);

const routes = [
    {
        "path" : "/",
        "name" : "home",
        "component" : HomePage
    },
    {
        "path" : "/cart",
        "name" : "cart",
        "component" : MyCart 
    },
    {
        "path" : "/checkout",
        "name" : "checkout",
        "component" : Checkout 
    }
]

const router = new VueRouter({
    routes
})
export default router