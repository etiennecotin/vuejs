<template>

    <div class="container">


        <!--<side-bar>-->




        <!--</side-bar>-->
        <md-toolbar>
            <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title">Night Spot</h2>
        </md-toolbar>

        <!--<md-toolbar>-->
            <!--<md-button class="md-icon-button" @click.native="toggleLeftSidenav">-->

            <!--</md-button>-->
        <!--</md-toolbar>-->

        <md-toolbar class="md-dense" v-if="!home">
            <md-button class="md-icon-button" @click.native="goBack">
                <md-icon >reply</md-icon>
            </md-button>

            <!--<h2 class="md-title" style="flex: 1">Dense</h2>-->

            <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
            </md-button>
        </md-toolbar>


        <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
            <md-toolbar class="md-large">
                <div class="md-toolbar-container">
                    <h3 class="md-title">My profil</h3>
                </div>
            </md-toolbar>

            <div class="nav-bar-link">
                <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>-->
                <li><router-link :to="{ name: 'home'}" ref="leftSidenav" @click.native="toggleLeftSidenav">Go to home</router-link></li>
                <li><router-link :to="{ name: 'test'}" ref="leftSidenav" @click.native="toggleLeftSidenav" >test</router-link></li>
                <li><router-link :to="{ name: 'panier'}" ref="leftSidenav" @click.native="toggleLeftSidenav" >Go to panier</router-link></li>
            </div>
        </md-sidenav>

        <div class="main-content">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>

            <!--Affichage des notifications depuis store-->
            <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration" >
                <span>{{notification}}.</span>
                <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>
            </md-snackbar>
        </div>
        <!--<v-footer>-->


        <!--</v-footer>-->
    </div>

</template>

<script>

    import store from '../store/index'
    import sideBar from './side-bar.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'base',
        store,
        data () {
            return {
                state: store.state,
                home: false,
                url: this.$route.name,

                vertical: 'bottom',
                horizontal: 'center',
                duration: 4000
            }
        },
        created () {

            console.log(this.$route.name);

            if(this.url == 'home'){
//                console.log(this.url.name);
                this.home = true
            }else{
//                console.log(this.url);
                this.home = false
            }
        },
        computed: mapGetters({
            notification: 'notification',
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
                console.log('go back');
                this.$router.go(-1);

//                setTimeout(function () { this.changeUrl() }.bind(this), 100)
            },
//            changeUrl: function(){
//                this.url = this.$route.name;
//                console.log(this.url);
//            }

        },
        components: {

//            'side-bar': sideBar,
        },
        watch: {

            notification () {
                if (this.notification != null){
                    this.$refs.snackbar.open();
                }

            },
            url: function(val) {
                if(val == 'home'){
//                    console.log(this.url.name);
                    this.home = true
                }else{
//                    console.log(this.url);
                    this.home = false
                }
            },
            '$route': function(e){

                if(e.name == 'home'){
//                    console.log(this.url.name);
                    this.home = true
                }else{
//                    console.log(this.url);
                    this.home = false
                }
            }
        }

    }
</script>

<style lang="scss">

    @import '../../node_modules/vue-material/dist/vue-material.css';
    @import '../../node_modules/vue-material/src/core/stylesheets/variables.scss';

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .1s ease;
    }
    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for <2.1.8 */ {
        transform: translateX(100px);
        opacity: 0;
    }


    .large-button {
        width: 100%;
    }

    .nav-bar-link {
        padding: 1% 6% 1% 6%;
    }

    .md-dense{
        background-color: rgba(105,119,207,0.28) !important;
    }

    $sizebar-size: 280px;

    [v-cloak] {
        display: none;
    }
    html, body {
        height: 100%;
        overflow: hidden;
    }
    body {
        display: flex;
    }
    .container {
        min-height: 100%;
        display: flex;
        flex-flow: column nowrap;
        flex: 1;
        transition: $swift-ease-out;
        @media (min-width: 1281px) {
            padding-left: $sizebar-size;
        }
    }
    .main-sidebar.md-sidenav {
        .md-sidenav-content {
            width: $sizebar-size;
            display: flex;
            flex-flow: column;
            overflow: hidden;
            @media (min-width: 1281px) {
                top: 0;
                pointer-events: auto;
                transform: translate3d(0, 0, 0);
                box-shadow: $material-shadow-2dp;
            }
        }
        .md-backdrop {
            @media (min-width: 1281px) {
                opacity: 0;
                pointer-events: none;
            }
        }
        .md-toolbar {
            min-height: 172px;
            border-bottom: 1px solid rgba(#000, .12);
        }
        .vue-material-logo {
            font-size: 24px;
            a {
                width: 100%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                color: inherit;
                text-decoration: none;
                &:hover {
                     color: inherit;
                     text-decoration: none;
                 }
            }
            img {
                width: 160px;
                margin-bottom: 16px;
            }
        }
        .main-sidebar-links {
            overflow: auto;
            flex: 1;
            .md-inset .md-list-item-container {
                padding-left: 36px;
            }
            .md-list-item-container {
                font-size: 14px;
                font-weight: 500;
            }
        }
        .release-version {
            padding: 8px 8px 8px 16px;
            border-top: 1px solid rgba(#000, .12);
            display: none;
            @media (max-width: 480px) {
                display: block;
            }
            > div {
                  justify-content: center;
              }
            .md-select:after {
                color: rgba(#000, .87);
            }
        }
    }
    .main-content {
        padding: 16px;
        flex: 1;
        overflow: auto;
        background-color: #fff;
        transform: translate3D(0, 0, 0);
        transition: $swift-ease-out;
        transition-delay: .2s;
    }
    .md-router-enter, .md-router-leave {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        @media (min-width: 1281px) {
            left: $sizebar-size;
        }
        .main-content {
            opacity: 0;
            overflow: hidden;
        }
    }
    .md-router-leave {
        z-index: 1;
        transition: $swift-ease-in;
        transition-duration: .25s;
    }
    .md-router-enter {
        z-index: 2;
        transition: $swift-ease-out;
        .main-content {
            transform: translate3D(0, 10%, 0);
        }
    }
    code {
        &:not(.hljs) {
             margin-left: 1px;
             margin-right: 1px;
             padding: 0 4px;
             display: inline-block;
             border-radius: 2px;
             font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;
            pre {
                margin: 8px 0;
            }
        }
    }
    .phone-viewport {
        width: 360px;
        height: 540px;
        margin-right: 16px;
        display: inline-block;
        position: relative;
        overflow: hidden;
        background-color: #fff;
        border: 1px solid rgba(#000, .12);
    }
    .api-table tr > td:first-child {
        white-space: nowrap;
    }
</style>