<template>
<div>
    <button @click="showAllPosts">afficher les posts</button>
     <Post/>
    
    </div>
    
</template>

<script>
import { mapActions } from 'vuex';
import Post from '@/components/Post.vue';

export default {
    name: 'Posts',
    components: {Post},
    data() {
        return {
            allPosts: [],
 
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
            post2: "post2",
        }),
        showAllPosts() {
            this.post2({userId: this.userId, post: this.post, image: this.image, likes: this.likes, dislikes: this.dislikes, usersLiked: this.usersLiked, usersDisliked: this.usersDisliked})
            .then(console.log ("youpi youpi"));
        }
    }
};
</script>


<style lang="scss">
.grp-accueil {
    display:flex;
    flex-direction: column;
    width: 75%;
    background-color:#FFD7D7;
    font-size:35px;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.grp-accueil button{
    display:flex;
    flex-direction: column;
    width: 75%;
    background-color:#FFD7D7;
    font-size:35px;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: linear-gradient(#626b65, #e2e470);
}

</style>



<style lang="scss">
</style>
