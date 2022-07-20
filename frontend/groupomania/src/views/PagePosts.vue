<template>
    <div>
    <HeaderPosts/>
     <Post2/>
     <ModelPost/>
    
    </div>
    
</template>

<script>
import HeaderPosts from '@/components/HeaderPosts.vue';
import Post2 from '@/components/Post.vue';
import ModelPost from '@/components/EditPost.vue';

export default {
    name: 'Posts',
    components: {Post2, HeaderPosts, ModelPost},
  
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
