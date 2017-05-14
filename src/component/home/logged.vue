<template>
    <div>
        <h2>Bonjour {{user.username}}</h2>

        <md-spinner  v-if="loading" :md-size="60" md-indeterminate class="md-warn"></md-spinner>
        <md-card md-with-hover v-if="posts" v-for="user in posts">
            <md-card-header>
                <div class="md-title">{{user.title}}</div>
                <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>
        </md-card>
    </div>



</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'
    import {HTTP} from '../../api.js'

    export default {
        name: 'logged',
        store,
        data () {
          return {
              posts : [],
              loading: false
          }
        },
        computed: mapGetters({
            user: 'user',
        }),
        created () {

            this.loading = true;
            HTTP.get('posts').then(response => {
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
</script>

<style lang="scss">

</style>