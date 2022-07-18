const Post = require('../models/post'); // importation du modèle de post
const fs = require('fs');
/* création d'un post*/
exports.createPost = (req, res, next) => {
    console.log('createPost', req.body)
    const postObject = req.body.post;
   console.log('crerate23')
    const post = new Post({
      ...postObject,
      //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    post.save() // sauvegarde le post dans la BDD
      .then(() => res.status(201).json({ message: 'post créé'}))
      .catch(error => res.status(400).json({ error }));
  };

  /* modification d'un post*/
exports.modifypost = (req, res, next) => {
    const postObject = req.file ?
      {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'post modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };



/*suppression d'un post*/
exports.deletePost = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(sauce => {
        const filename = sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Sauce.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Sauce supprimée !'}))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  };

/* récupération de tous les posts*/
exports.getAllPosts = (_req, res, next) => {
  Post.find()
    .then((posts) => {res.status(200).json(posts);})
    .catch((error) => {res.status(400).json({error: error});
    }
  );
};

/* récupération d'un post*/
exports.getOnePost = (req, res, next) => {
    Post.findOne({_id: req.params.id})
      .then((sauce) => {res.status(200).json(sauce);})
      .catch((error) => {res.status(404).json({ error: error});
      }
    );
  };