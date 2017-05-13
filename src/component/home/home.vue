<template>
    <div>


        <md-layout md-align="center">
            <h1 class="center">Bienvenue sur Night Spot</h1>
            <h3 class="center" >Qu'est ce que c'est ? </h3>
        </md-layout>
        <br>



            <md-layout md-gutter>
                <!--<md-layout md-flex="33" >-->
                    <!--<router-link :to="{ name: 'signUp'}" class="waves-effect waves-light btn-large"> <md-button class="md-raised md-primary">Inscription</md-button></router-link>-->
                <!--</md-layout>-->
                <!--<md-layout></md-layout>-->

                <md-layout md-align="center">
                    <router-link :to="{ name: 'signUp'}" class="waves-effect waves-light btn-large"> <md-button class="md-raised md-primary">Inscription</md-button></router-link>
                </md-layout>

                <md-layout md-align="center">
                    <router-link :to="{ name: 'login'}" class="waves-effect waves-light btn-large" > <md-button class="md-raised md-primary">Connexion</md-button></router-link>
                </md-layout>


            </md-layout>

            <!--<md-layout md-gutter>-->
                <!--&lt;!&ndash;<md-layout></md-layout>&ndash;&gt;-->
                <!--<md-layout md-flex="33" >-->
                    <!--&lt;!&ndash;<md-button class="md-raised md-primary">Primary</md-button>&ndash;&gt;-->

                    <!--<router-link :to="{ name: 'login'}" class="waves-effect waves-light btn-large"> <md-button class="md-raised md-primary">Connexion</md-button></router-link>-->


                <!--</md-layout>-->
            <!--</md-layout>-->



        <!--<div class="row">-->
            <!--<div class="col s3 offset-s3 center">-->
                <!--&lt;!&ndash;<a class="waves-effect waves-light btn-large" ><i class="fa fa-edit fa-lg"></i> Inscription</a>&ndash;&gt;-->
                <!--<router-link :to="{ name: 'signUp'}" class="waves-effect waves-light btn-large"><i class="fa fa-edit fa-lg"></i> Inscription</router-link>-->
            <!--</div>-->
            <!--<div class="col s3 center">-->
                <!--&lt;!&ndash;<a class="waves-effect waves-light btn-large"><i class="material-icons left">cloud</i>Connexion</a>&ndash;&gt;-->

                <!--<router-link :to="{ name: 'login'}" class="waves-effect waves-light btn-large"><i class="fa fa-edit fa-lg"></i> Connexion</router-link>-->
            <!--</div>-->
        <!--</div>-->

    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'home_page',
        store,
        ready: function() {
//
        }


    }
</script>

<style lang="scss">

    .center {
        text-align: center;
        line-height: 1em;

    }

    .md-sidenav-content{
        width: 220px !important;
    }
</style>