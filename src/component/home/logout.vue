<template>
    <div>
        <md-layout md-align="center">
            <h1 class="center">Bienvenue sur Night Spot</h1>
            <h3 class="center" >Qu'est ce que c'est ? </h3>
        </md-layout>
        <br>
        <md-layout md-gutter>

            <md-layout md-align="center">
                <router-link :to="{ name: 'signUp'}" class="waves-effect waves-light btn-large"> <md-button class="md-raised md-primary">Inscription</md-button></router-link>
            </md-layout>

            <md-layout md-align="center">
                <router-link :to="{ name: 'login'}" class="waves-effect waves-light btn-large" > <md-button class="md-raised md-primary">Connexion</md-button></router-link>
            </md-layout>


        </md-layout>
    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'logout',
        store,


    }
</script>

<style lang="scss">

</style>