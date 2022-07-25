const express = require('express');
const router = express.Router();

/*const auth = require('../middleware/auth');*/
// multer pour sauvergarder les images sur le serveur
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');
// routes CRUD pour les posts
router.get('/', /*auth,*/ postCtrl.getAllPosts);
router.get('/:id', /*auth,*/postCtrl.getOnePost);
router.post('/', /*auth,*/ multer, postCtrl.createPost);
router.delete('/:id', /*auth,*/ postCtrl.deletePost);
router.post("/:id/like", /*auth*/ postCtrl.likePost);
router.post("/:id", /*auth*/ multer, postCtrl.modifyPost);

module.exports = router;