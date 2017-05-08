import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Axios from 'axios'

// import Materials from 'materialize-css'


import App from './component/app/App.vue'
import Test from './component/test/test.vue'

import Home from './component/home/home.vue'
import login from './component/login/login.vue'
import signUp from './component/login/signUp.vue'

import Base from './component/base.vue'




Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Axios)
// Vue.use(Materials)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
      {name: 'home', path: '/', component: Home},
      {name: 'login', path: '/login', component: login},
      {name: 'signUp', path: '/login/signup', component: signUp},

      {name: 'test', path: '/test', component: Test },
      {name: 'panier', path: '/panier', component: App }
    ]
});


const app = new Vue(Vue.util.extend({router}, Base)).$mount('#app');

window.vue = app;