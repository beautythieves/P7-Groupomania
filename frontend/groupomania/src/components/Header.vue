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


<style lang="scss">
.grp-header {
    display:flex;
    background-color:rgb(111, 0, 255);
        height: 200px;
    justify-content: space-around;
    border-style: solid;
    border-width: 5px;
    border-color: #4E5166;

}
.grp-header__logo {
    display:flex;
    background-color:#FFD7D7;
 
}
.grp-header__contact  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
}
</style>
