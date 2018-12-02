const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const { promisify } = require('es6-promisify');

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name!').notEmpty();
  req.checkBody('email', 'That Email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Password confirm cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    const errorsObject = errors.map(({ param, msg: message }) => ({ param, message }));
    res.send(errorsObject);
    return;
  }
  next();
};

exports.createUser = async (req, res, next) => {
  const user = new User({ email: req.body.email, name: req.body.name });
  const register = promisify(User.register.bind(User));
  try {
    await register(user, req.body.password);
  } catch (e) {
    res.send(e);
    return;
  }

  next(); // Pass to authController.login
};
