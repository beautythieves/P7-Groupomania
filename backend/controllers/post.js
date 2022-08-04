const Post = require('../models/post'); // importation du modèle de post
const fs = require('fs');
/* création d'un post*/
exports.createPost = (req, res, next) => {
  console.log('creatrePost', req.file);
  let img = undefined;
  if (req.file) img = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  const post = new Post({
    userId: req.body.userId,
    post: req.body.content,
    image: img,
    createdAt: new Date(),
    email: req.body.email,
  });
  post.save() // sauvegarde le post dans la BDD
    .then(() => {
      console.log('success')
      res.status(201).json({ message: 'post créé'})
    })
    .catch(error => {
      console.log('echec', error)
      res.status(400).json({ error })
    });
  };

  /* modification d'un post*/
exports.modifyPost = (req, res, next) => {
  let content = req.body.content;
  Post.findOne({_id: req.params.id})
    .then((post) => {
      const newPost = post;
      newPost.post = content;
      newPost.modifyAt = new Date();// Classe les postes par ordre de création
      if (req.file) newPost.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      Post.updateOne({ _id: post._id }, { $set: { ...newPost } })
        .then(() => res.status(200).json({ message: 'modifié !'}))
        .catch(error => res.status(400).json({ error: error }));
    }).catch((error) => {res.status(404).json({ error: error});
  });
};

/*suppression d'un post*/
exports.deletePost = (req, res, next) => {
  console.log('reach');
  Post.findOne({ _id: req.params.id })
      .then(post => {
        console.log('find', post);
        Post.deleteOne({ _id: post._id })
          .then(() => res.status(200).json({ message: 'Post supprimé!'}))
          .catch(error => {
            console.log(error);
            res.status(400).json(error)
          });
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(error)
      });
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
      .then((post) => {
        const newPost = post;
        newPost.likes = newPost.likes+1; 
        Post.updateOne({ _id: newPost.id }, { newPost, _id: newPost.id })
          .then(() => res.status(200).json({ message: 'post modifié !'}))
          .catch(error => res.status(400).json({ error }));
      })
      .catch((error) => {res.status(404).json({ error: error});
    }
  );
};

/* like*/
exports.likePost = (req, res, next) => {
  Post.findOne({_id: req.params.id})
      .then((post) => {
        if (!post.usersLiked.includes(req.body.userId)) {
          const newPost = post;
          newPost.likes = Number(post.likes) + 1; 
          newPost.usersLiked.push(req.body.userId);
          Post.updateOne({ _id: post._id }, { $set: { ...newPost } })
            .then(() => res.status(200).json({ message: 'liked'}))
            .catch(error => res.status(400).json({ error }));
        } else res.status(500).json({ message: 'already liked'})
      })        
      .catch((error) => {res.status(404).json({ error: error});
    }
  );
};