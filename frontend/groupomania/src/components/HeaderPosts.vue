<template>
  <div class ="grp-header">
     <div class ="grp-header__logo">
        <img src = "@/assets/logogrp.png" alt="logo de groupomania">
     </div>
        <div class="grp-header__links">
            <div class="grp-header__accueil"> 
                <a><router-link to="/">Accueil (déconnexion)</router-link></a>   
            </div>
            <div class="grp-header__createPost">
                <button @click="sendPost" type="button" class="grp-header__createPost__button">créer un post</button>
            </div>
            <div class="grp-header__contact">
                <a href="mailto:admin@groupomania.com">Contact</a>
            </div>
        </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'HeaderPosts',
    data() {
        return {
            posts: [],
            isError: false,
        };
    },
    methods: {
        ...mapActions({
            createPost: "createPost",
        }),
        sendPost() {
            this.createPost({post: "{ userId: '1', post: 'nouveau post', likes: 1, dislikes: 11}"})
            .then(this.$router.push('posts'));
        }
    }
};
</script>


<style lang="scss">
.grp-header {
    display:flex;
    background-color:rgb(76, 0, 255);
        height: 200px;
    justify-content: space-around;
    border-style: solid;
    border-width: 5px;
    border-color: #4E5166;

}
.grp-header__logo {
    display:flex;
    background-color:#FFD7D7;
 
}
.grp-header__links, .grp-header__contact a, .grp-header__accueil a, .grp-header__createPost{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
}
</style>
