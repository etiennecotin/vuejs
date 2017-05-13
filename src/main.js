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

import Base from './component/base.vue'



Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)



import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'

import Vuetify from 'vuetify'
Vue.use(VueMaterial)
Vue.use(Vuetify)





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
      {name: 'login', path: '/login', component: login},
      {name: 'signUp', path: '/login/signup', component: signUp},

      {name: 'test', path: '/test', component: Test },
      {name: 'panier', path: '/panier', component: App }
    ]
});


const app = new Vue(Vue.util.extend({router}, Base)).$mount('#app');

window.vue = app;