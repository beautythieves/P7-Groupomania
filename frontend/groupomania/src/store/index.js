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
      const formData = new FormData();
      formData.append("content", post.content);
      formData.append("title", post.title);
      if (post.file) formData.append("inputFile", post.file);
      axios.post('http://localhost:4000/api/post', formData,
        {
          headers: {
            'Content-Type': 'application/form-data',
            //"Authorization": `Bearer ${this.user.token}`,
          },
        }
      )
    },
    modifyPost(_context, post) {
      const formData = new FormData();
      formData.append("content", post.content);
      if (post.file) formData.append("inputFile", post.file);
      return new Promise((resolve, reject) => {
      axios.post(`http://localhost:4000/api/post/${post.postId}`, formData,
        {
          headers: {
            'Content-Type': 'application/form-data',
            //"Authorization": `Bearer ${this.user.token}`,
          },
        }).then(response => {
          console.log ("effacé!", response)
          resolve(response)
        })
        .catch(error => {
          console.log("bummer!", error)
          reject(error)
        });
      });
    },
   // effacer un post
    deletePost(_context, post) {
      return new Promise((resolve, reject) => {
        api.delete(`post/${post.postId}`)
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
    likePost(_context, post) {
      return new Promise((resolve, reject) => {
        api.post(`post/${post.postId}/like`)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        });
      });
    },
  },
  modules: {
  }
})