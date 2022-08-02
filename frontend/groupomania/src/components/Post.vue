<template>
    <div>
        <ModelPost v-if="edit" :postToEdit="postToEdit" @finish="refresh"/>
        <button @click="modifyPost(false)">Créer un post</button>
        <div class="grp-post" v-for="post in posts.reverse()" :key="post._id">
            <div class="grp-post__infos">
                <div class="grp-post__author">Auteur: {{ post.email }}</div>
                <div class="grp-post__createdAtAt">Créé le : {{ post.createdAt }}</div>
                <div v-if="post.modifyAt !== undefined" class="grp-post__modifyAt"> Modifié le : {{ post.modifyAt }}</div>
            </div>
            <div class="grp-post__title">texte : {{ post.post }}</div>
            <img v-if="post.image" :src="post.image" :alt="post.content">
            <div @click.stop.prevent="like(post)" class=" grp-post__likesdislikes">
                <div class="grp-post__like"><i class="fa-regular fa-thumbs-up"></i> {{ post.likes }}</div>
            </div>
            <button v-if="post.userId === userId || isAdmin" @click="modifyPost(post)">Modifier le post</button>
            <button v-if="post.userId === userId || isAdmin" @click="remove(post)">Supprimer</button>
            <div></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
    computed: {
        ...mapGetters({
            userId: 'userId',
            isAdmin: 'isAdmin',
        }),
    },
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
            console.log(postId, this.userId)
            this.likePost({postId: postId._id, userId: this.userId,}).then(() => this.showAllPosts());
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


<style lang="css" scoped>
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

.grp-post__infos {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    align-items: baseline;
    font-style: italic;
    margin: 8px;
}

.grp-post__like, .grp-post__dislike {
    padding: 20px;
}
.grp_creerpost{
    display:initial;
}
@media only screen and (max-width : 1024px) {
  .grp_creerpost {
    display:flex;
    justify-content:center;
    align-items:center;

  }
 
}
</style>
