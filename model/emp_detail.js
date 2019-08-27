const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for emp-details
let emp_detail = new Schema({
  user_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  phone_number: {
    type: Number
  }
},{
    collection: 'emp_detail'
});

module.exports = mongoose.model('Emp_detail', emp_detail);