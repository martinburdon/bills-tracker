const passport = require('passport');

exports.login = (passport.authenticate('local'), (req, res) => {
  console.log('💥 ', req.session);
  res.send(`${req.body.name} logged in`);
});

exports.logout = (req, res) => {
  req.logout();
  res.send('Logged out');
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }

  res.send('You are not logged in');
};
