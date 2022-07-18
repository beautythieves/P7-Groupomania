<template>
    <div class="grp-accueil">
        Bienvenu sur le réseau social interne de l'entreprise
        <button class="grp-accueil__button"><router-link to="/login">Connexion</router-link></button>
        <button class="grp-accueil__button"><router-link to="/signup">Inscription</router-link></button>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
    data() {
        return {
            text: "Mon beau site"
        };
    }
};
</script>

<style lang="scss">
.grp-accueil {
    display:flex;
    flex-direction: column;
    width: 75%;
    background-color:#9b2230;
    font-size:15px;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.grp-accueil{
    display:flex;
    flex-direction: column;
    width: 75%;
    background-color:#b91c1c;
    font-size:25px;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: linear-gradient(#626b65, #8170e4);
}
.grp-accueil__button{
    font-size: 25px;
    color: white;
}
</style>
