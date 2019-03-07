const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');

router.post('/register', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.firstName) {
    return res.status(422).json({
      message: "first name is required",
      success: false
    });
  }

  if(!user.lastName) {
    return res.status(422).json({
        message: 'last name is required',
        success: false
    });
  }

  if(!user.email) {
    return res.status(422).json({
      message: 'email is required',
      success: false
    });
  }

  if(!user.password) {
    return res.status(422).json({
      message: 'password  is required',
      success: false
    });
  }

  if(!user.jobRole) {
    return res.status(422).json({
      message: 'job role is required',
      success: false
    });
  }

  if(!user.clearenceLevel) {
    return res.status(422).json({
      message: 'clearance level is required',
      success: false
    });
  }

  const finalUser = new Users(user);

  finalUser.generateHash(user.password);

  return finalUser.save().then(() => res.json({ user: finalUser.toAuthJSON() }));
});

router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      message: 'email is required',
      success: false
    });
  }

  if(!user.password) {
    return res.status(422).json({
      message: 'password is required',
      success: false
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser) => {
    if(err) {
      return res.status(422).json({
        message: "email or password is invalid",
        success: false
      });
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