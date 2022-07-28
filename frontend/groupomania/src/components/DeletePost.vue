<template>
                <div class="grp-header__deletePost">
                    <button @click="deletePost" type="button" class="grp-header__deletePost__button">supprimer le post</button>
                </div>
        
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'DeletePost',
    data() {
        return {
            posts: [],
            isError: false,
        };
    },
    methods: {
        ...mapActions({
            deletePost: "deletePost",
        }),
        deletePost() {
            this.deletePost()
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

</style>
