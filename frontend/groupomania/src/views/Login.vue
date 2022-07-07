<template>
    <div class="grp-login">
        Login patatu patata
        <div class="toto">dsqsdsqdsqdq</div>
        <button @click="methodeTest">Login</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    data: function() {
        return {
            text: "Hi This is example on usage of Vue.js Components"
        };
    },
    methods: {
        ...mapActions({
           signup: 'signup' 
        }),
        methodeTest() { 
            let usersInfos = {mail: 'toto', password: 'toto'};    
            this.signup(usersInfos);    
        },
    },
};
</script>


<style lang="scss">

</style>
