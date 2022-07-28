<template>
    <footer>
        <div class="grp-footer">
            <p>En cas de problème de connexion ou d'inscription, envoyez un mail en cliquant sur la rubrique "contact".</p>
            <a href="mailto:admin@groupomania.com">Contact</a>
        </div>
    </footer>
</template>

<script>


export default {
    name: 'Footer',
    data() {
        return {
            text: "Mon beau site"
        };
    }
};
</script>


<style lang="css" scoped>
footer {
    display:flex;
    padding: 30px;
    background-color:white;
    height: 100px;
    justify-content:center;
    align-content: center;
    border-style: solid;
    border-width: 5px;
    border-color: #4E5166;
    margin: 30px;
    width: 90%;
    color: black !important;
    font-size: 20px;
}
a {
    color: black !important;
}

@media only screen and (max-width : 1024px) {
  footer {
    display:flex;
    height: 100px;
    background-color: white;
    width: 60%;
    border-color: #4E5166;
    font-size: 15px;
  }
  
}
</style>
