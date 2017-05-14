import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'


// import Materials from 'materialize-css'


import App from './component/app/App.vue'
import Test from './component/test/test.vue'

import Home from './component/home/home.vue'
import login from './component/login/login.vue'
import signUp from './component/login/signUp.vue'
import logout from './component/login/logout.vue'

import Base from './component/base.vue'



Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)



import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'

import Vuetify from 'vuetify'
Vue.use(VueMaterial)
Vue.use(Vuetify)

import store from './store/index'

import {mapGetters} from 'vuex'

// Vue.use(VueMaterial.MdCore) //Required to boot vue material
// Vue.use(VueMaterial.MdButton)
// Vue.use(VueMaterial.MdIcon)
// Vue.use(VueMaterial.MdSidenav)
// Vue.use(VueMaterial.MdToolbar)


// Vue.use(Materials)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
      {name: 'home', path: '/', component: Home},
      {name: 'login', path: '/login', component: login, meta: { noAuth: true }
          // children: [
          //     { name: 'signUp', path: 'signup', component: signUp}
          // ]
      },
      {name: 'signUp', path: '/login/signup', component: signUp, meta: { noAuth: true }},

      {name: 'logout', path: '/login/logout', component: logout, meta: { requiresAuth: true }},

      {name: 'test', path: '/test', component: Test,  meta: { requiresAuth: true }
      },
      {name: 'panier', path: '/panier', component: App, meta: { requiresAuth: true } },
      { path: '*', redirect: { name: 'home' }}
    ]
});
// console.log(store.getters.user.logged+' log');
router.beforeEach((to, from, next) => {

    store.dispatch('checkLoggedIn').then((response) => {
        console.warn('check logged main')
    }, (error) => {
        console.error("not logged main")
    });

    if (to.matched.some(record => record.meta.noAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // console.log(store.getters.user.logged+' log home');
        if (store.getters.user.logged === true) {
            next({
                name: 'home',
            })
        } else {
            next(false)
        }
    } else {
        next() // make sure to always call next()!
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // console.log(store.getters.user.logged+' not log');
        if (store.getters.user.logged === false) {
            next({
                name: 'login',
                // query: { redirect: to.fullPath }
            })
        } else {
            // console.log(store.getters.user.logged+' not log2');
            next(false)
        }
    } else {
        next() // make sure to always call next()!
    }

})

const app = new Vue(Vue.util.extend({router},Base)).$mount('#app');
// console.log(store.getters.user.logged+' log term');
window.vue = app;