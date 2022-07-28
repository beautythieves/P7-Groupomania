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
    height: 50px;
    justify-content:center;
    align-items: center;
    border-style: solid;
    border-width: 5px;
    border-color: #4E5166;
    margin: auto;
    width: auto;
    color: black !important;
    font-size: 20px;
}
a {
    color: black !important;
}
</style>
