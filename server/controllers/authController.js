const passport = require('passport');

exports.login = (passport.authenticate('local'), (req, res) => {
  console.log('💥 ', req.user);
  res.send(`${req.body.username} logged in`);
});

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
