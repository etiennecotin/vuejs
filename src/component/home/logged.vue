<template>
    <div>
        <h2>Bonjour {{user.username}}</h2>
    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'logged',
        store,
        computed: mapGetters({
            user: 'user',
        }),


    }
</script>

<style lang="scss">

</style>