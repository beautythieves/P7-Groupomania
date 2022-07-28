<template>
    <div> 
    <HeaderLoginSignup/>
   <Signup/>
   </div>
    
</template>

<script>
import HeaderLoginSignup from '@/components/HeaderLoginSignup.vue';
import Signup from '@/components/Signup.vue';

export default {
    name: 'PageSignup',
    components: { HeaderLoginSignup, Signup }
    
}
</script>


<style lang="css">


</style>
