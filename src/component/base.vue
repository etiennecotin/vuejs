<template>

    <div>
        <side-bar></side-bar>

        <div class="container">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>




</template>

<script>

    import store from '../store/index'
    import sideBar from './side-bar.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'base',
        store,
        components: {

            'side-bar': sideBar,
        },

    }
</script>

<style lang="scss">

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


</style>