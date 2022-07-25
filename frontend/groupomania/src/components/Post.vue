<template>
    <div>
        <ModelPost v-if="edit" :postToEdit="postToEdit" @finish="refresh"/>
        <button @click="modifyPost({})">Créer un post</button>
        <div class="grp-post" v-for="post in posts" :key="post._id">
            Je suis le post numéro {{ post._id }}
            <div class="grp-post__title">texte : {{ post.post }}</div>
            <img v-if="post.image" :src="post.image" :alt="post.content">
            <div @click.stop.prevent="like(post)" class=" grp-post__likesdislikes">
                <div class="grp-post__like"><i class="fa-regular fa-thumbs-up"></i> {{ post.likes }}</div>
            </div>
            <button @click="modifyPost(post)">Modifier le post</button>
            <button @click="remove(post)">Supprimer</button>
            <div></div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ModelPost from '@/components/EditPost.vue';

export default {
    name: 'Post2',
    data() {
        return {
            posts: [],
            isError: false,
            edit: null,
            postToEdit: null,
        };
    },
    components: { ModelPost },
    methods: {
        ...mapActions({
            post2: "showAllPosts",
            likePost: "likePost",
            deletePost: "deletePost",
        }),
        showAllPosts() {
            this.post2()
            .then((response) => {
                console.log ("youpi youpi", response)
                this.posts = response;
            });
        },
        like(postId) {
            console.log(postId)
            this.likePost({postId: postId._id}).then(() => this.showAllPosts());
        },
        remove(post) {
            this.deletePost({postId: post._id}).then(() => this.showAllPosts());
        },
        modifyPost(post) {
            this.postToEdit = post;
            this.edit = true;
        },
        refresh() {
            this.edit = false;
            this.showAllPosts();
        },
    },
    mounted() {
        this.showAllPosts();
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
