<template>  
  <div class=" grp-editpost__body">
    <div> 
      <h1 class=" grp-editpost__title" > Publier un post</h1>
    </div>
    <div class=" grp-editpost__form"> 
      <form>
        <div class=" grp-editpost__texte">
          <!-- texte obligatoire pour le post-->
          <textarea v-model="content" maxlength="500" placeholder="Exprimez-vous... (500 caractères max)" required class=" grp-editpost__message"></textarea>
        </div>
        <!-- ca correspond à quoi lignes 13 à 21-->
        <img v-if="postToEdit.image" :src="postToEdit.image" :alt="postToEdit.content"/>
        <div class=" grp-editpost__button">
          <input name="inputFile"
                 type="file"
                 class="custom-file-input"
                 id="inputFile"
                 aria-describedby="inputFileAddon"
                 @change="onFileChange"/>
          <button @click="sendPost" type="button" class="grp-editpost__butpublish"> Publier</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions} from 'vuex';

export default {
    name: 'ModelPost',
    data() {
        return {
            id: '',
            posts: [],
            isError: false,
            content: '',
            file: null,
        };
    },
    props: { 
      postToEdit: { type: Object } 
    },
    methods: {
        ...mapActions({
            createPost: "createPost",
            modifyPost: "modifyPost",
        }),
        sendPost() {
          console.log('create');
          if (this.postToEdit.content !== '') this.modify();
          else this.createPost({ file: this.file, content: this.content }).then(() => this.$emit('finish'));
        },
        modify() {
          console.log('edit');
          this.modifyPost({ postId: this.postToEdit._id, file: this.file, content: this.content }).then(() => this.$emit('finish'));
        },
        onFileChange(e) {
          this.file = e.target.files[0] || e.dataTransfer.files;
        }
    },
    mounted() {
      if (this.postToEdit !== null) {
        this.id = this.postToEdit._id;
        this.content = this.postToEdit.post;
      }
    }
};
</script>


<style lang="css" scoped>
.grp-editpost__body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #FFD7D7;
  background-image: url('~@/assets/logosansnom.png');
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
  font-family: Lato;
}
.grp-editpost__message {
  width: 500px;
  height: 500px;
  font-size: 20px;
  resize: none;
  font-family: Lato;
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
  font-family: Lato;
}
</style>
