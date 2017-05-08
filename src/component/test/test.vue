<template>
<div class="panel panel-primary">
  <h1>test</h1>
  <p>{{msg}}</p>
  <br>
  <p>{{ count }}.</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>
 
<script>
 
import store from '../../store/index'
import {mapGetters} from 'vuex'

export default {
  name: 'Informations',
  store,
  data () {
        return {
            msg: 'Welcome to Your Vue.js App',
        }
    },
    computed: {
      count () {
        return this.$store.getters.checkoutStatus
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
  }
}
</script>