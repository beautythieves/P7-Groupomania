<template>
    <div class="grp-form-inscription">
        ici mon formulaire
        <input placeholder="Courriel"/>
        <input placeholder="Mot de passe"/>
        <input placeholder="Confirmez le mot de passe"/>
        <button> Se connecter</button>
    </div>
       
        
    
</template>

<script>
export default {
    name: 'inscform',
    data() {
        return {
            text: "Mon beau site"
        };
    }
};
</script>


<style lang="scss">
.grp-form-inscription {
    display:flex;
    background-color:#FFD7D7;
    height: 80px;
    justify-content: space-between;
}
.grp-header__navbar {
    display:flex;
    background-color:#FFD7D7;
    height: 100px;
    justify-content: space-around;
}
</style>
