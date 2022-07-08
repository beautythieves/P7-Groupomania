<template>
    <div class="grp-accueil">
        Bienvenu sur le réseau social interne de l'entreprise
        <button><router-link to="/login">Connexion</router-link></button>
        <button><router-link to="/signup">Inscription</router-link></button>
            
    </div>
    
</template>

<script>
export default {
    name: 'Home',
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
    background-color:#FFD7D7;
    font-size:35px;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.grp-accueil button{
    display:flex;
    flex-direction: column;
    width: 75%;
    background-color:#FFD7D7;
    font-size:35px;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: linear-gradient(#626b65, #e2e470);
}

</style>
