<template>
    <div>
        <md-toolbar>
            <md-button class="md-icon-button" @click.native="toggleLeftSidenav" v-if="user.logged">
                <md-icon>menu</md-icon>
            </md-button>
            <div v-bind:class="[!user.logged ? isLoggedIn : '', errorClass]">
                <h2 class="md-title"><router-link :to="{ name: 'home'}" >Night Spot</router-link></h2>
            </div>
        </md-toolbar>
        <md-toolbar class="md-dense" v-if="!home">
            <md-button class="md-icon-button" @click.native="goBack">
                <md-icon >undo</md-icon>
            </md-button>

            <!--<h2 class="md-title" style="flex: 1">Dense</h2>-->

            <!--<md-button class="md-icon-button">-->
            <!--<md-icon>favorite</md-icon>-->
            <!--</md-button>-->
        </md-toolbar>

        <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
            <md-toolbar class="md-large">
                <div class="md-toolbar-container">
                    <h3 class="md-title">My profil</h3>
                    <h3 class="md-title" v-if="!user.logged">Non connecté</h3>
                </div>
            </md-toolbar>

            <div class="nav-bar-link" >
                <md-list>
                        <md-list-item >
                            <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
                        </md-list-item>

                        <md-list-item>
                            <md-icon>send</md-icon> <span><router-link :to="{ name: 'panier'}" ref="leftSidenav" @click.native="toggleLeftSidenav" >Go to panier</router-link></span>
                        </md-list-item>

                        <md-list-item>
                            <md-icon>delete</md-icon> <span><router-link :to="{ name: 'test'}" ref="leftSidenav" @click.native="toggleLeftSidenav" >test</router-link></span>
                        </md-list-item>

                        <md-list-item>
                            <md-icon>error</md-icon> <span><router-link :to="{ name: 'home'}" ref="leftSidenav" @click.native="toggleLeftSidenav">Go to home</router-link></span>

                            <md-divider class="md-inset"></md-divider>
                        </md-list-item>

                        <md-list-item>
                            <md-icon>error</md-icon> <span><router-link :to="{ name: 'logout'}" ref="leftSidenav" @click.native="toggleLeftSidenav">Logout</router-link></span>

                            <!--<md-divider class="md-inset"></md-divider>-->
                        </md-list-item>
                </md-list>
            </div>
        </md-sidenav>
    </div>
</template>

<script>

    import store from '../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'sideBar',
        store,
        data () {
            return {
                home: false,
                url: this.$route.name,

                isLoggedIn : 'bloc-center',
                errorClass : '',
            }
        },
        created () {

            if(this.url == 'home'){
                this.home = true
            }else{
                this.home = false
            }
        },
        computed: mapGetters({
            user: 'user',
        }),
        methods: {
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            toggleRightSidenav() {
                this.$refs.rightSidenav.toggle();
            },
            closeRightSidenav() {
                this.$refs.rightSidenav.close();
            },
            closeLeftSidenav() {
                this.$refs.leftSidenav.close();
            },
            open(ref) {
                console.log('Opened: ' + ref);
            },
            close(ref) {
                console.log('Closed: ' + ref);
            },
            goBack(){
                console.log('go back side');
                this.$router.go(-1);

//                setTimeout(function () { this.changeUrl() }.bind(this), 100)
            },

        },
        watch: {
            '$route': function(e){

                if(e.name == 'home'){
//                    console.log(this.url.name);
                    this.home = true
                }else{
//                    console.log(this.url);
                    this.home = false
                }
            },
            user: function (val) {

                console.warn(val)
                if (val == true){
                    this.user.logged = false
                }else {
                    this.user.logged = true
                }
            }
        }

    }


</script>

<style lang="scss">

</style>