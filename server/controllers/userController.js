const passport = require('passport');

//We plugin our jwt strategy as a middleware so only verified users can access this route
exports.profile = async (req, res, next) => {
  passport.authenticate('jwt', { session : false }, async (err, user, info) => {
    try {
      if (!user) {
        return next({
          message: 'Please login',
          status: 401
        });
      }

      res.json({
        message : 'You made it to the secure route',
        user,
        token: req.body.token
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
