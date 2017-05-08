<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <!--<a href="#" class="brand-logo center">Logo</a>-->
                <a href="#" data-activates="slide-out" class="brand-logo"><i class="material-icons">menu</i></a>

                <router-link :to="{ name: 'home'}" data-activates="slide-out" class="brand-logo center">Logo</router-link>


                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><router-link :to="{ name: 'home'}" class="test">Go to home</router-link></li>
                    <li><router-link :to="{ name: 'test'}">test</router-link></li>
                    <li><router-link :to="{ name: 'panier'}">Go to panier</router-link></li>
                </ul>
            </div>
        </nav>



        <!--<router-link to="/home'">Go to home</router-link>-->




        <ul id="slide-out" class="side-nav" style="transform: translateX(-100%);">
            <li><div class="userView">
                <div class="background">
                    <img src="images/office.jpg">
                </div>
                <a href="#!user"><img class="circle" src="images/yuna.jpg"></a>
                <a href="#!name"><span class="white-text name">John Doe</span></a>
                <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div class="divider"></div></li>
            <li><a class="subheader">Subheader</a></li>
            <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>


    </div>

</template>

<script>

    import store from '../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'sideBar',
        store,
        ready: function(){
//            $('.button-collapse').sideNav({
//                    menuWidth: 300, // Default is 300
//                    edge: 'right', // Choose the horizontal origin
//                    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
//                    draggable: true // Choose whether you can drag to open on touch screens
//            });

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
        }

    }


</script>

<style lang="scss">

</style>