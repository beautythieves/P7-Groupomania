// schema pour les posts des utilisateurs

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  post: { type: String, required: true },
  image: { type: String, required: false },
  likes: { type: Number, required: false, default: 0 },// false car peut liker ou pas
  usersLiked: { type: [String], required: false },
});

module.exports = mongoose.model('post', postSchema);