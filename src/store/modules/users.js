/**
 * Created by etienne on 11/05/2017.
 */

import {HTTP} from '../../api.js'

import * as types from '../mutation-types'

const state = {
    id: '',
    username: '',
    name: '',
    lastName: '',
    email: '',
    connection: '',
    lastConnection: '',
    signUp: '',

};

// getters
const getters = {
    user: state => [state => state.id, state => state.username, state => state.name, state => state.lastName, state => state.email, state => state.connection, state => state.lastConnection, state => state.signUp],
    getId: state => state.id,
    getUsername: state => state.username,
    getName: state => state.name,
    getLastName: state => state.lastName,
    getEmail: state => state.email,
    getConnection: state => state.connection,
    getLastConnection: state => state.lastConnection,
};

// actions
const actions = {
    login ({ commit }) {

        commit(types.INCREMENTE)

        // HTTP.get('posts/'+this.username)
        //     .then(response => {
        //         this.posts = response.data;
        //
        //
        //     })
        //     .catch(e => {
        //         this.errors.push(e)
        //     })

    },
    register ({ commit }) {
        // setTimeout(() => {
        // commit(types.DECREMENTE)
        // }, 1000)
        return new Promise((resolve, reject) => {
            // setTimeout(() => {
            commit(types.DECREMENTE)
            commit(types.SET_NOTIFICATIONS)
            resolve()
            // }, 1000)
        })
    }
};

// mutations
const mutations = {
    // increment: state => state.count++,

    [types.INCREMENTE] (state) {
        state.count++
    },
    [types.DECREMENTE] (state) {
        state.count--
    },
    [types.SET_NOTIFICATIONS] (state) {
        state.notifications.push('Mis à jour');
        setTimeout(() => { state.notifications.pop() }, 1500)
    },

};

export default {
    state,
    getters,
    actions,
    mutations
}