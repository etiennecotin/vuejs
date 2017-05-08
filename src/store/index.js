import Vue from 'vue'
import Vuex from 'vuex'

import test from './modules/test'
// import info from './modules/info'
// import menu from './modules/menu'
// import messages from './modules/messages'
// import enseignants from './modules/enseignants'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        test,
        // info,
        // menu,
        // messages,
        // enseignants
    }
})