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


<style lang="css" scoped>
.grp-header {
    display:flex;
    padding:30px;
    background-color: white;
    height: 200px;
    justify-content: flex-start;
    border-style: solid;
    border-width: 5px;
    border-color: #4E5166;
    margin: 30px;
    width:90%;
    
}
.grp-header__logo {
    display:flex;
    background-color: white;
    width: 60%;
 
}
.grp-header__accueil a{
    display: flex;   
    font-size: 20px;
    color:black;
    padding: 40px;
   
}
@media only screen and (max-width : 1024px) {
  .grp-header {
    height: 100px;
    background-color: white;
    width: 60%;
    border-color: #4E5166;
  }
  .grp-header__accueil a{
    font-size: 15px; 
    padding: 20px;
    }

    .grp-header__logo{
        width:60%;
    }
}
</style>
