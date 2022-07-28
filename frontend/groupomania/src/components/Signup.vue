<template>

    <div class="grp-signup__grandParentContainer">
        <div class="grp-signup__parentContainer">
            <form class="grp-signup__form">
                <div class="grp-signup__form__email">
                    <label class="">Email </label>
                    <input v-model="email" type="email" class="">
                </div>
                <div class="grp-signup__form__password">
                    <label class="">Mot de passe </label>
                    <input v-model="password" type="password" class="">
                </div>
                <div class="grp-signup__form__signup">
                <button @click="goSignup" type= "button" class="grp-signup__form__signup__button">Signup</button>
                </div>
               
            </form>
            <div v-if="isError">Erreur de connexion</div>
        </div>
    </div>

    
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Signup',
    data() {
        return {
            isError: false,
            email: "",
            password: "",
        };
    },
    methods: {
        ...mapActions({
            signup: 'signup',
        }),
        goSignup() {
            this.signup({ email: this.email, password: this.password})
            .then(this.$router.push('posts'));
        }
    }
};
</script>


<style lang="css" scoped>
.grp-signup__grandParentContainer{
    display: table;
    height: 100%;
    background-color:#d7ffd9;
    font-size:25px;
    margin:  0 auto;
    
}
.grp-signup__parentContainer {
    display:table-cell;
    background-image: url('~@/assets/logosansnom.png');
    height: 50px;
    vertical-align: middle;
    }
.grp-signup__form {
    border-style: solid;
    border-color: black;
    padding: 50px;
    }

    
.grp-signup__form__signup__button {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    margin: 50px;
    font-size: 25px;
}

.grp-signup__form__signup__button:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.grp-signup__form__signup__button:active {
    color: red;
}

.grp-signup__form__signup__button:active:after {
    background: transparent;
}

.grp-signup__form__signup__button:hover:before {
    opacity: 1;
}

.grp-signup__form__signup__button:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: orange;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
    

</style>
