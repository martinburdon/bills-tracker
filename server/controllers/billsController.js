const mongoose = require('mongoose');
const Bill = mongoose.model('Bill');
// const User = mongoose.model('User');

exports.getBills = async (req, res) => {
  // 1. Query the database for a list of all bills
  const billsPromise = Bill.find(); // TODO: Add skip/limit/sort
  const bills = await billsPromise;
  res.send(bills);
};
