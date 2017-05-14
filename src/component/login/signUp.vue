<template>
    <div class="row">
        <div class="center">
            <h2>Inscription</h2>
        </div>
        <form class="col s6 offset-s3" v-on:submit.prevent  @submit.stop.prevent="submit">
            <!--<div class="col s6 offset-s3">-->

            <md-input-container>
                <label>Email or username</label>
                <md-input v-model="username"></md-input>
            </md-input-container>

            <md-input-container md-has-password>
                <label>Password</label>
                <md-input type="password" v-model="password"></md-input>
            </md-input-container>

            <md-layout md-align="center">
                <md-button class="md-raised md-primary large-button" type="submit" v-on:click="submit" >Inscription</md-button>
            </md-layout>

        </form>
    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: '',
        store


    }
</script>

<style lang="scss">

</style>