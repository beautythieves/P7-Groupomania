<template>
  <div class ="grp-header">
    <div class ="grp-header__logo">
        <img src = "@/assets/logogrp.png" alt="logo de groupomania">
     </div>
     <div class="grp-header__links">
        <div class="grp-header__accueil"> 
            <div class="grp-header__infos">   
                <div class="grp-header__email">Bonjour {{ email }}</div>   
                <div class="grp-header__userId">(identifiant: {{ userId }})</div>
            </div>
            <button @click ="goLogout">Déconnexion</button>   
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'HeaderPosts',
    data() {
        return {
            text: "Mon beau site"
        };
    },
    computed: {
        ...mapGetters({
            userId: 'userId',
            email: 'email'
        }),
    },
    methods: {
        ...mapActions({
           logout: 'logout', 
        }),
        goLogout() {
            this.logout().then(this.$router.push('/'));
        }
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

.grp-header__infos {
    display:flex;
    flex-direction: column;
    margin-bottom: 16px;
}

.grp-header__title {
    font-size: 14px;
}

.grp-header__userId {
    font-size: 12px;
}

.grp-header__links, .grp-header__accueil a{
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
        width:40%;
    }
}
</style>
