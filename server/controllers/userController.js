const passport = require('passport');

//We plugin our jwt strategy as a middleware so only verified users can access this route
exports.profile = async (req, res, next) => {
  passport.authenticate('jwt', { session : false }, async (err, user, info) => {
    try {
      if (!user) {
        const error = new Error('Please login');
        return next(error);
      }

      res.json({
        message : 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
