<template>
    <div class="grp-posts">
        <Post v-for="(post, index) in posts"
              :key="index"
              :id="index"/>
    </div>
</template>

<script>
import Post from '@/components/Post';

export default {
    name: 'Posts',    
    components: { Post },
    data: function() {
        return {
            posts: [{}, {}, {}],
        };
    },
};
</script>


<style lang="scss">
</style>
