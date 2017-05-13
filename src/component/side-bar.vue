<template>
    <div>

        <!--<div class="phone-viewport">-->

        <md-toolbar>
            <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title">Night Spot</h2>
        </md-toolbar>
        <!--<nav class=" teal  lighten-2">-->
            <!--<div class="nav-wrapper lighten-2" >-->
                <!--&lt;!&ndash;<a href="#" class="brand-logo center">Logo</a>&ndash;&gt;-->
                <!--<a href="#" data-activates="slide-out" class="brand-logo"><i class="material-icons">menu</i></a>-->

                <!--<router-link :to="{ name: 'home'}" data-activates="slide-out" class="brand-logo center">Logo</router-link>-->


                <!--<ul id="nav-mobile" class="right hide-on-med-and-down">-->
                    <!--<li><router-link :to="{ name: 'home'}" class="test">Go to home</router-link></li>-->
                    <!--<li><router-link :to="{ name: 'test'}">test</router-link></li>-->
                    <!--<li><router-link :to="{ name: 'panier'}">Go to panier</router-link></li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</nav>-->

            <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
                <md-toolbar class="md-large">
                    <div class="md-toolbar-container">
                        <h3 class="md-title">My profil</h3>
                    </div>
                </md-toolbar>
                <div class="nav-bar-link">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
                    <li><router-link :to="{ name: 'home'}" class="test">Go to home</router-link></li>
                    <li><router-link :to="{ name: 'test'}">test</router-link></li>
                    <li><router-link :to="{ name: 'panier'}">Go to panier</router-link></li>
                </div>
            </md-sidenav>


        <!--</div>-->

        <!--<md-bottom-bar>-->
            <!--<md-bottom-bar-item md-icon="history"><router-link :to="{ name: 'home'}" class="test">Go to home</router-link></md-bottom-bar-item>-->
            <!--<md-bottom-bar-item md-icon="favorite" md-active><router-link :to="{ name: 'test'}">test</router-link></md-bottom-bar-item>-->
            <!--<md-bottom-bar-item md-icon="near_me"><router-link :to="{ name: 'panier'}">Go to panier</router-link></md-bottom-bar-item>-->
        <!--</md-bottom-bar>-->


        <!--<router-link to="/home'">Go to home</router-link>-->

    </div>

</template>

<script>

    import store from '../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'sideBar',
        store,
        ready: function(){
//
            // Show sideNav
//            $('.button-collapse').sideNav('show');
            // Initialize collapse button
            $(".button-collapse").sideNav();
            // Initialize collapsible (uncomment the line below if you use the dropdown variation)
            $('.collapsible').collapsible();

//            $(".button-collapse").sideNav();


            $(".button-collapse").click(function(){
                alert('zz');
                $("#slide-out").css("transform", "translateX(0%)");

            }) ;
        },
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
            open(ref) {
                console.log('Opened: ' + ref);
            },
            close(ref) {
                console.log('Closed: ' + ref);
            }
        }

    }


</script>

<style lang="scss">

</style>