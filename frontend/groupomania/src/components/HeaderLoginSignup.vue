<template>
  <div class ="grp-header">
     <div class ="grp-header__logo">
        <img src = "@/assets/logogrp.png" alt="logo de groupomania">
     </div>
     <div class="grp-header__accueil"> 
        <a><router-link to="/">Accueil</router-link></a>   
     </div>
     <div class="grp-header__contact">
        <a href="mailto:admin@groupomania.com">Contact</a>
        
     </div>
  </div>
</template>

<script>

export default {
    name: 'HeaderLoginSignup',
    data() {
        return {
            text: "Mon beau site"
        };
    }
};
</script>


<style lang="scss" scoped>
.grp-header {
    display:flex;
    background-color: white;
        height: 200px;
    justify-content: space-around;
    border-style: solid;
    border-width: 5px;
    border-color: #4E5166;

}
.grp-header__logo {
    display:flex;
    background-color: white;
 
}
.grp-header__contact a, .grp-header__accueil a{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color:black;
}
</style>
