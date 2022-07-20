<template>
    <div> 
    <Header/>
    <Welcome/>
    </div>
    
    
    
    
</template>

<script>
import Welcome from '@/components/Welcome.vue';
import Header from '@/components/Header.vue';
export default {
    name: 'Home',
    components: { Welcome, Header }
    
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