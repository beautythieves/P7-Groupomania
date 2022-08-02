import { createStore } from 'vuex'
import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:4000/api/'
})

// Utilisateur par défaut
const defaultUser = {
  userId: -1,
  token: '',
}

let user = localStorage.getItem('user');
// Si l'utilisateur n'est pas dans le local storage, l'utilisateur est par défaut
// Sinon récupérer l'utilisateur du local storage
if (!user) {
  user = defaultUser;
  console.log('pas connecté');
} else {
  try {
    user = JSON.parse(user);
    api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  } catch(exception) {
    user = defaultUser;
  }
}

export default createStore({
  //STATE
  state: {
    user: user,
  },

  //GETTERS
  getters: {
    userId: state => {
      return state.user.userId;
    },
    isAdmin: state => {
      if (state.user.isAdmin) {
        return true;
      } else {
        return false
      }
    },
    email: state => {
      return state.user.email;
    },
  },

  //MUTATIONS
  mutations: {
    LOG_USER: function(state, user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    LOG_OUT: function(state) {
      state.user = defaultUser;
      localStorage.clear();
    },
    USER_INFOS: function(state, user) {
      state.user = user;
    },
    SET_USER_NAME: function(state, modifiedName) {
      state.user.userName = modifiedName;
    },
  },

  //ACTIONS
  actions: {
    signup(_context, usersInfos) {
      return new Promise((resolve, reject) => {
        api.post('auth/signup', usersInfos)
        .then(response => {
          console.log('reussi', response);
          resolve(response)
        })
        .catch(error => {
          console.log('echec', error)
          reject(error)
        });
      });
    },

    login({ commit }, userslogin) {
      return new Promise((resolve, reject) => {
        api.post('auth/login', userslogin)
        .then(response => {
          commit('LOG_USER', response.data);
          resolve(response)
        })
        .catch(error => {
          console.log('echec', error)
          reject(error)
        });
      });
    },

    // Se déconnecter
    logout({ commit }) {
      commit('LOG_OUT');

    },

    //création de posts
    createPost(_context, post) {
      const formData = new FormData();
      formData.append("content", post.content);
      formData.append("userId", post.userId);
      formData.append("email", post.email);
      if (post.file) formData.append("inputFile", post.file);
      return new Promise((resolve, reject) => {
      axios.post('http://localhost:4000/api/post', formData,
        {
          headers: {
            'Content-Type': 'application/form-data',
            "Authorization": `Bearer ${user.token}`
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
    modifyPost(_context, post) {
      const formData = new FormData();
      formData.append("content", post.content);
      if (post.file) formData.append("inputFile", post.file);
      return new Promise((resolve, reject) => {
      axios.post(`http://localhost:4000/api/post/${post.postId}`, formData,
        {
          headers: {
            'Content-Type': 'application/form-data',
            "Authorization": `Bearer ${user.token}`
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
      console.log('store', post)
      return new Promise((resolve, reject) => {
        api.post(`post/${post.postId}/like`, { userId: post.userId })
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