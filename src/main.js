import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Vuex2 from './store/index.js'

import App from './App.vue'

import Test from './component/test/test.vue'




Vue.use(VueRouter)
Vue.use(Vuex)


const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
      {name: 'home', path: '/', component: App},
      {name: 'test', path: '/test', component: Test },
      {name: 'prout', path: '/test/:id', component: Test }
    ]
});


const app = new Vue({
  router,
   // render: h => h(Test)
}).$mount('#app')




// Vue.use(VueRouter)

// const router = new VueRouter({history: true, root: config.root});

// router.map({
//     '/': {
//         name: 'prout',
//         component: Home
//     },
//     '/test/:id': {
//         name: 'test',
//         component: Test
//     }
// });

// // const app = new Vue({
// //   el: '#app',
// //   render: h => h(App)
// // })

// var app = new Vue({
//   router,
// }).$mount('#app')