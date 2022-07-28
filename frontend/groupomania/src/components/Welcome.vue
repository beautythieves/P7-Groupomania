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

<style lang="css" scoped>
.grp-accueil {
    display:flex;
    flex-direction: column;
    width: 75%;
    background-color:#9b2230;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size:25px;
    margin: auto;
    background: linear-gradient(#FFD7D7,#FD2D01);
     background-image: url('~@/assets/logosansnom.png');
}
.grp-accueil__button{
    font-size: 20px;
    border-radius:10px;
    color: white !important;
    background: linear-gradient(#4E5166,#FD2D01);
    
    }
.grp-accueil__button:hover{
    background-color:#FFD7D7;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
@media only screen and (max-width: 1024px) {
    .grp-accueil {
    display:flex!important;
    padding:30px!important;
    flex-direction: column!important;
    width: 60%!important;
    background-color:#9b2230!important;
    justify-content: center!important;
    align-items: center!important;
    align-content:center!important;
    margin: 30px!important;
    font-size:20px!important;
    background: linear-gradient(#FFD7D7,#FD2D01)!important;
     background-image: url('~@/assets/logosansnom.png')!important;
}
}

</style>
