<template>
    <div>
        <h1 class="center">Bienvenue sur Night Spot</h1>


        <h3 class="center">Qu'est ce que c'est ? </h3>

        <br>


        <div class="row">
            <div class="col s3 offset-s3 center">
                <!--<a class="waves-effect waves-light btn-large" ><i class="fa fa-edit fa-lg"></i> Inscription</a>-->
                <router-link :to="{ name: 'signUp'}" class="waves-effect waves-light btn-large"><i class="fa fa-edit fa-lg"></i> Inscription</router-link>
            </div>
            <div class="col s3 center">
                <!--<a class="waves-effect waves-light btn-large"><i class="material-icons left">cloud</i>Connexion</a>-->

                <router-link :to="{ name: 'login'}" class="waves-effect waves-light btn-large"><i class="fa fa-edit fa-lg"></i> Connexion</router-link>
            </div>
        </div>

    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'home_page',
        store,
        ready: function() {
            $(document).ready(function(){
                // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('#modal1').modal('open');
            });
        }


    }
</script>

<style lang="scss">

</style>