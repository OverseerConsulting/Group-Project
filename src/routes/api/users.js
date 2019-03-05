const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');

router.post('/', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.firstName) {
    return res.send({
        success: false,
        message: 'first name is required'
    });
  }

  if(!user.lastName) {
    return res.status(422).json({
      errors: {
        message: 'is required',
      },
    });
  }

  if(!user.email) {
    return res.status(422).json({
      errors: {
        message: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        message: 'is required',
      },
    });
  }

  if(!user.jobRole) {
    return res.status(422).json({
      errors: {
        message: 'is required',
      },
    });
  }

  if(!user.clearenceLevel) {
    return res.status(422).json({
      errors: {
        message: 'is required',
      },
    });
  }

  const finalUser = new Users(user);

  finalUser.generateHash(user.password);

  console.log(finalUser)

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
});


module.exports = router;