<template>  
  <div>
    <!-- comment positionner l'image background?-->
  <router-view/>
  </div>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
    name: 'App',
    data: function() {
        return {
            text: "Hi This is example on usage of Vue.js Components"
        };
    },
    components: { Footer },
};
</script>
   <!-- font family lato-->
<style lang="scss">
#app {
  font-family: Lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
