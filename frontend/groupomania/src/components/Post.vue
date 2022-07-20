<template>
    <div>

        <button @click="showAllPosts">afficher les posts</button>

    <div class="grp-post" v-for="pommedeterre in posts" :key="pommedeterre.id">
        Je suis le post numéro {{ pommedeterre.id }}
        <div class="grp-post__title">texte : {{ pommedeterre.post }}</div>
        <div class=" grp-post__likesdislikes">
            <div class="grp-post__like"><i class="fa-regular fa-thumbs-up"></i> {{ pommedeterre.likes }}</div>
            <div class="grp-post__dislike"><i class="fa-regular fa-thumbs-down"></i>{{ pommedeterre.dislikes }}</div>
        </div>
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
    background-color:#FFD7D7;
    border: solid #FD2D01;
}
.grp-post__likesdislikes {
    display:flex;
    margin: auto;
    align-items: center;
    justify-content: center;
}
.grp-post__like, .grp-post__dislike {
    padding: 20px;
}
</style>
