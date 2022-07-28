<template>
  <div class ="grp-header">
     <div class ="grp-header__logo">
        <img src = "@/assets/logogrp.png" alt="logo de groupomania">
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

<style lang="css" scoped>
.grp-header {
   display:flex;
    padding: 30px;
    background-color: white;
    height: 200px;
    justify-content: flex-start;
    align-content: center;
    border-style: solid;
    border-width: 5px;
    border-color: #4E5166;
    margin: 30px;
    width:90%;
}
.grp-header__logo {
    display:flex;
    background-color:white;
}
@media only screen and (max-width : 1024px) {
  .grp-header {
    display:flex;
    height: 100px;
    background-color: white;
    width: 60%;
    border-color: #4E5166;
  }
  .grp-header__logo{
    width: 60%;
  }
}



</style>
