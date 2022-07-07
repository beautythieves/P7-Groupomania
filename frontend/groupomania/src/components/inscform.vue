<template>
    <div class="grp-form-inscription">
        ici mon formulaire
        <input placeholder="Courriel" class= "grp-form-inscription-form"/>
        <input placeholder="Mot de passe" class="grp-form-inscription-form"/>
        <input placeholder="Confirmez le mot de passe" class= "grp-form-inscription-form"/>
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
    flex-direction: column;
    width: 50%;
    background-color:#FFD7D7;
    font-size:25px;
    justify-content: space-around;
    align-content: center;
    margin: auto;
}
.grp-form-inscription-form {
    display:flex;
    background-color:#d7dbff;
    height: 50px;
    justify-content: center;
    align-content: center;
    }
</style>
