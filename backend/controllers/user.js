
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

/* controleur création d'un compte utilisateur*/
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash,
          isAdmin: false,
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };
/* controleur connection à un compte utilisateur*/
exports.login = (req, res, next) => {
    console.log('login', req.body);
    User.findOne({ email: req.body.email })
        .then(user => {
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        console.log('login2');
        bcrypt.compare(req.body.password, user.password)
            .then(valid => {
            if (!valid) {
                console.log('login3');
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            console.log('login4');
            res.status(200).json({
                userId: user._id,
                isAdmin: user.isAdmin,
                email: user.email,
                token: jwt.sign(
                { userId: user._id },
                process.env.TOKEN,
                { expiresIn: '24h' }
                )
            });
            })
            .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
