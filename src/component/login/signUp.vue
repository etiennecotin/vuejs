<template>
    <div class="row">
        <div class="center">
            <h2>Inscription</h2>
        </div>
        <form class="col s6 offset-s3">


            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate">
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">Inscription</i>
                    </button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: '',
        store,


    }
</script>

<style lang="scss">

</style>