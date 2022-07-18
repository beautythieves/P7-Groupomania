<template>
    <div>
        <button @click="showAllPosts">afficher les posts</button>

    <div class="grp-post" v-for="pommedeterre in posts" :key="pommedeterre.id">
        Je suis le post numéro {{ pommedeterre.id }}
        <div class="grp-post__title">texte : {{ pommedeterre.post }}</div>
        <div class="grp-post__content">{{ pommedeterre.likes }}</div>
        <div class="grp-post__author">{{ pommedeterre.dislikes }}</div>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Post2',
    data() {
        return {
            posts: [],
            isError: false,
        };
    },
    methods: {
        ...mapActions({
            post2: "showAllPosts",
        }),
        showAllPosts() {
            this.post2()
            .then((response) => {
                console.log ("youpi youpi", response)
                this.posts = response;
            });
        }
    }
};
</script>


<style lang="scss">
.grp-post {
    margin: 16px;
    background-color: lightgray;
}
</style>
