<template>
  <div class ="grp-header">
     <div class ="grp-header__logo">
        <img src = "@/assets/logogrp.png" alt="logo de groupomania">
     </div>
     <div class="grp-header__contact">
        <a href="mailto:admin@groupomania.com">Contact</a>
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


<style lang="scss" scoped>
.grp-header {
    display:flex;
    background-color: white;
    height: 200px;
    justify-content: space-around;
    align-content: center;
    border-style: solid;
    border-width: 5px;
    border-color: #4E5166;
    margin: auto;
    width:90%;

}
.grp-header__logo {
    display:flex;
    background-color:white;
 
}
.grp-header__contact  a {
    padding: 20px;
    font-size: 20px;
    color: black;
    position: absolute;
    right:150px;
    top: 50px;
}
</style>
