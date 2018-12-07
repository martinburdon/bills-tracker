const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    // try {
      if (err || !user) {
        return next({
          message: 'Incorrect login details'
        });
      }

      req.login(user, { session: false }, async (error) => {
        if( error ) return next(error)
        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        const body = { _id : user._id, email : user.email };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user : body }, 'top_secret');
        //Send back the token to the user
        return res.json({ token });
      });
    // } catch (error) {
    //   return next(error);
    // }
  })(req, res, next);
};

// When the user sends a post request to this route, passport authenticates the user based on the middleware created previously
exports.register = async (req, res, next) => {
  passport.authenticate('register', { session: false }, async (err, user, info) => {
    try {
      if (err || !user) {
        return next({
          message: err.errmsg
        });
      }

      res.json({
        message : 'Signup successful',
        user
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.send('Logged out');
};

exports.isLoggedIn = (req, res) => {
  console.log('💥 ', req.user);
  if (req.isAuthenticated()) {
    res.send('Logged in');
  } else {
    res.send('You are not logged in');
  }

};
