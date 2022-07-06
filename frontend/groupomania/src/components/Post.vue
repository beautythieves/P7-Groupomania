<template>
    <div class="grp-post">
        Je suis le post numéro {{ id }}
        <div class="grp-post__title">{{ title }}</div>
        <div class="grp-post__content">{{ content }}</div>
        <div class="grp-post__author">{{ author }}</div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    data() {
        return {
            title: 'titre',
            content: 'Je suis le contenu du post',
            author: 'toto',
        };
    },
    props: {
        id: { type: Number }
    }
};
</script>


<style lang="scss">
.grp-post {
    margin: 16px;
    background-color: lightgray;
}
</style>
