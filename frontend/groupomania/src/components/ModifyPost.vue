<template>
                <div class="grp-header__modifyPost">
                    <button @click="modifyPost" type="button" class="grp-header__modifyPost__button">créer un post</button>
                </div>
        
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'ModifyPost',
    data() {
        return {
            posts: [],
            isError: false,
        };
    },
    methods: {
        ...mapActions({
            modifyPost: "modifyPost",
        }),
        modifyPost() {
            this.modifyPost()
            .then(this.$router.push('posts'));
        }
    }
};
</script>


<style lang="css" scoped>
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
