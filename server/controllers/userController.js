const mongoose = require('mongoose');

//We plugin our jwt strategy as a middleware so only verified users can access this route
exports.profile = (req, res, next) => {
  res.json({
    message : 'You made it to the secure route',
    user : req.user,
    token : req.query.secret_token
  })
};
