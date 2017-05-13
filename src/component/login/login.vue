<template>
    <div class="row">

        <md-layout >
            <router-link :to="'-1'">Return</router-link>
        </md-layout>

        <div class="center">
            <h2>Connexion</h2>
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


            <!--<div class="row">-->
                <!--<div class="input-field col s12">-->
                    <!--<input id="password" type="password" class="validate" v-model="password">-->
                    <!--<label for="password">Password</label>-->
                <!--</div>-->
            <!--</div>-->
            <md-layout md-align="center">
                <md-button class="md-raised md-primary large-button" type="submit" v-on:click="submit" >Connexion</md-button>
            </md-layout>
            <!--<div class="row">-->
                <!--<div class="input-field col s12">-->
                    <!--<button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="submit">Submit-->
                        <!--<i class="material-icons right">Connexion</i>-->
                    <!--</button>-->
                <!--</div>-->
            <!--</div>-->
            <!--<md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">-->
                <!--<span>Connection timeout. Showing limited messages.</span>-->
                <!--<md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>-->
            <!--</md-snackbar>-->
            <div>

                <md-spinner md-indeterminate></md-spinner>
                <!--<i  class="fa fa-spinner fa-spin"></i>-->
                <md-spinner  v-show="loading" :md-size="60" md-indeterminate class="md-warn"></md-spinner>
                <span v-if="posts" v-for="user, index in posts">
                    {{index}}.{{user}} / {{user.id}} -> {{user.title}}
                    <br>
                </span>

            </div>
        <!--</div>-->
        </form>
    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'
    import {HTTP} from '../../api.js'

    export default {
        name: 'login',
        store,
        data () {
            return {
                username: '',
                password: '',
                posts:'',
                loading: false,
            }

        },
        created () {

            this.loading = true;

            HTTP.get('posts/1')
                .then(response => {
                    this.posts = response.data;
                    this.loading = false;
//                    alert(this.posts)

                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        methods: {
            submit: function () {

                this.loading = true;
                this.posts = null;

                HTTP.get('posts/'+this.username)
                    .then(response => {
                        this.posts = response.data;
                        this.loading = false;
//                        alert(this.posts)
//                        this.$refs.snackbar.open();
                    })
                    .catch(e => {
                        this.loading = false;

                        store.dispatch('addNotification', 'Un  problème est survenue').then(() => {})
                    })



            }
        }


    }
</script>