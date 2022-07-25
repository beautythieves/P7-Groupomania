<template>
    
        <div> 
        <HeaderLoginSignup/>
        <LoginForm/>
        </div>
   
</template>

<script>
import HeaderLoginSignup from '@/components/HeaderLoginSignup.vue';
import LoginForm from '@/components/LoginForm.vue';


export default {
    name: 'Login',
    components: { HeaderLoginSignup, LoginForm }
    
}
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
