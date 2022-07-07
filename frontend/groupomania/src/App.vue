<template>  
  <Header/>
  <inscform/>
  <Home/>
  <router-view/>
</template>

<script>
import Header from '@/components/Header';
import inscform from '@/components/inscform';
import Home from '@/components/Home';

export default {
    name: 'App',
    data: function() {
        return {
            text: "Hi This is example on usage of Vue.js Components"
        };
    },
    components: { Header, inscform, Home },
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
