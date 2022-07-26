<template>
  <div class ="grp-header">
     <div class ="grp-header__logo">
        <img src = "@/assets/logogrp.png" alt="logo de groupomania">
     </div>
     <div class="grp-header__accueil"> 
        <a><router-link to="/">Accueil</router-link></a>   
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
    padding:30px;
    background-color: white;
    height: 200px;
    justify-content: flex-start;
    border-style: solid;
    border-width: 5px;
    border-color: #4E5166;
    margin: auto;
    width:auto;
}
.grp-header__logo {
    display:flex;
    background-color: white;
 
}
.grp-header__accueil a{
    display: flex;   
    font-size: 20px;
    color:black;
    margin: 10px;
    padding: 30px;
    position: absolute;
    right:50px;
}
</style>
