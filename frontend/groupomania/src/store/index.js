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
      createPost(_context, postContents) {
        return new Promise((resolve, reject) => {
        api.post('post', postContents)
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