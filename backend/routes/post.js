const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
// multer pour sauvergarder les images sur le serveur
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');
// routes CRUD (create, read, update, delete) pour les posts
router.get('/', auth, postCtrl.getAllPosts); // read
router.get('/:id', auth,postCtrl.getOnePost); // read
router.post('/', auth, multer, postCtrl.createPost); //create
router.delete('/:id', auth, postCtrl.deletePost); //delete
router.post("/:id/like", auth, postCtrl.likePost); // route pour les likes
router.post("/:id", auth, multer, postCtrl.modifyPost); //update

module.exports = router;