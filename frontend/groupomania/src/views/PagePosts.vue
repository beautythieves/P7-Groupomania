<template>
    <button @click="afficherPosts">afficher les posts</button>
     <Post/>
    
    
    
</template>

<script>
import Post from '@/components/Post.vue';

export default {
    name: 'Posts',
    components: {Post},
    data() {
        return {
            allPosts: [],
        };
    },
}
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
