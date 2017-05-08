// import {HTTP} from '../../api'
// import * as types from '../mutation-types'
// import user from './user'

const state = {
     count: 0
};

// getters
const getters = {
    checkoutStatus: state => state.count
};

// actions
const actions = {
    
};

// mutations
const mutations = {
    increment: state => state.count++,
    decrement: state => state.count--
};

export default {
    state,
    getters,
    actions,
    mutations
}