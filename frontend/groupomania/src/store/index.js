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
    getAllPosts(_context, AllPosts) {
      return new Promise((resolve, reject) => {
        api.get('post', AllPosts)
        .then(response =>{
          console.log('yes yes', response)
          resolve(response)
        })
        .catch(error =>{
          console.log('echec', error)
          reject(error)
        });
      });
    }
  },
  modules: {
  }
})
