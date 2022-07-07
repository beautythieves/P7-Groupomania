<template>
    <div class="grp-header">
        <div class="grp-header__logo">
            ici insertion du logo groupomania
           <img src="@/assets/logogrp.png"/> 
            <i class="fa-brands fa-reddit"></i> {{ text }}
        </div>
        <!-- Comment séparer les deux liens de nav?-->
        <div class="grp-header__navbar">
            <router-link to="/posts">Tous les posts</router-link> |
        </div>
    </div>
</template>

<script>


export default {
    name: 'Header',
    data() {
        return {
            text: "Mon beau site"
        };
    }
};
</script>


<style lang="scss">
.grp-header {
    display:flex;
    background-color:#FFD7D7;
    height: 80px;
    justify-content: space-between;
}
.grp-header__navbar {
    display:flex;
    background-color:#FFD7D7;
    height: 100px;
    justify-content: space-around;
}
</style>
