<template>
  
<div class=" grp-editpost__body">
  <div> 
    <h1 class=" grp-editpost__title" > Publier un post</h1>
  </div>
  <div class=" grp-editpost__form"> 
    <form action = post>
      <div class=" grp-editpost__texte">
        <textarea maxlength="50" placeholder = "Insérez un titre (50 caractères max)" required class=" grp-editpost__titre"></textarea>
        <textarea maxlength="500" placeholder="Exprimez-vous... (500 caractères max)" required class=" grp-editpost__message"></textarea>
      </div>
      <div class=" grp-editpost__button">
        <input id="fileUpload" ref="file" type="file" hidden />
        <button @click.stop.prevent="addImage" class="grp-editpost__butimage">Ajouter une image</button>
        <button @click.stop.prevent="sendPost" type="button" class="grp-editpost__butpublish"> Publier</button>
      </div>
    </form>
  </div>
</div>

</template>

<script>
import { mapActions} from 'vuex';
export default {
  // comment ajouter une autre methods pour l'ajout d'image?
    name: 'ModelPost',
    data() {
        return {
            posts: [],
            isError: false,
        };
    },
    methods: {
        ...mapActions({
            createPost: "createPost",
        }),
        sendPost() {
          const post = {
            userId: '1', message: 'nouveau post', titre:"ok"
          };
          if(this.$file !== undefined){
            post.image = this.$file
          }
            this.createPost({post})
            //.then(this.$router.push('posts'));
        },
        addImage(){

        document.getElementById("fileUpload").click()
        }
    }
};
</script>


<style lang="scss" scoped>
.grp-editpost__body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #FFD7D7;
  }
.grp-editpost__form, .grp-editpost__texte{
  display: flex;
  flex-direction: column;

}

.grp-editpost__titre {
  width: 500px;
  height: 100px;
  font-size: 20px;
  resize: none;
}
.grp-editpost__message {
  width: 500px;
  height: 500px;
  font-size: 20px;
  resize: none;
}
.grp-editpost__button {
  display: flex;
   align-items: center;
  justify-content: space-between;
  margin: 20px;
}
button {
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
}
</style>
