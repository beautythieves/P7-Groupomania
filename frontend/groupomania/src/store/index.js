import { createStore } from 'vuex'
import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:4000/api/'
})

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    signup(_context, usersInfos) {
      return new Promise((resolve, reject) => {
        api.post('auth/signup', usersInfos)
        .then(response => {
          console.log('reussi', response)
          resolve(response)
        })
        .catch(error => {
          console.log('echec', error)
          reject(error)
        });
      });
    },


    login(_context, userslogin) {
      return new Promise((resolve, reject) => {
        api.post('auth/login', userslogin)
        .then(response => {
          console.log('reussi', response)
          resolve(response)
        })
        .catch(error => {
          console.log('echec', error)
          reject(error)
        });
      });
    },
// création de posts
      createPost(_context, post) {

        console.log(post)
        const formData = new FormData();
        formData.append("userId", post.userId);
        formData.append("message", post.message);
        formData.append("titre", post.titre);
        if (post.image) formData.append("image", post.image);
        // console.log(formData)

        return new Promise((resolve, reject) => {
        api.post('post', formData)
        .then(response => {
          console.log ("success", response)
          resolve(response)
        })
        .catch(error => {
          console.log("failure!", error)
          reject(error)
        });
      });
    },
   // effacer un post
    deletePost(_context, postDel) {
      return new Promise((resolve, reject) => {
      api.delete('post/:id', postDel)
      .then(response => {
        console.log ("effacé!", response)
        resolve(response)
      })
      .catch(error => {
        console.log("bummer!", error)
        reject(error)
      });
    });
  },

  // modifier un post
  /*modifyPost(_context, postMod) {
    return new Promise((resolve, reject) => {
    api.delete('post/:id', postMod)
    .then(response => {
      console.log ("effacé!", response)
      resolve(response)
    })
    .catch(error => {
      console.log("bummer!", error)
      reject(error)
    });
  });
},
*/

/* nouvelle route modif/post/:id/edit
dans le controller qui gère m^me chose 
que pour afficher le formulaire lors création de post
passer le post en param vue puis 
text area contenu du post, titre etc...
formulaire soumettre meme route methode post.*/

    showAllPosts() {
      return new Promise((resolve, reject) => {
        api.get('post')
        .then(response => {
          console.log ("yes yes", response)
          resolve(response.data)
        })
        .catch(error => {
          console.log("raté!", error)
          reject(error)
        });
      });
    },
  },

  
  modules: {
  }
})