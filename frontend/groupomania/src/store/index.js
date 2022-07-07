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
        api.post('signup', usersInfos)
        .then(response => resolve(response))
        .catch(error => reject(error));
      });
    },
  },
  modules: {
  }
})
