<template>
    <div class="grp-post">
        Je suis le post numéro {{ id }}
        <div class="grp-post__title">{{ title }}</div>
        <div class="grp-post__content">{{ content }}</div>
        <div class="grp-post__author">{{ author }}</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Post',
    data() {
        return {
            isError: false,
            userId: "",
            post: "",
            image: "",
            likes: "",
            dislikes: "",
            usersLiked:"",
            usersDisliked: "",
        };
    },
    methods: {
        ...mapActions({
            post: "post",
        }),
        showAllPosts() {
            this.post({userId: this.userId, post: this.post, image: this.image, likes: this.likes, dislikes: this.dislikes, usersLiked: this.usersLiked, usersDisliked: this.usersDisliked})
            .then(console.log ("youpi youpi"));
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
