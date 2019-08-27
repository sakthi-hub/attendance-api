const bcrypt = require('bcrypt');
const saltRounds = 10;
var mongoose = require('mongoose');
//var Emp_detail = mongoose.model('emp_detail');

const Emp_detail = require('../model/emp_detail');

module.exports.emp_details_add = function(req, res) {

  var emp_detail = new Emp_detail();

  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
 emp_detail.user_name = req.body.user_name;
  emp_detail.email = req.body.email;
  emp_detail.password = hash;
  emp_detail.phone_number = req.body.phone_number;

  emp_detail.save(function(err) {
    if (err) {
      res.send(err) // Pass errors to Express.
    } else {
      res.send("data inserted successfully")
    }


  });
});

return false;


  

};

