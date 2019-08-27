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
};


module.exports.emp_details_get = function(req, res) {

    Emp_detail.find(function (err, emps){
    if(err){
      console.log(err);
    }
    else {
      res.json(emps);
    }
  });
};


module.exports.emp_details_edit = function(req, res) {

    let id = req.body.id;
  Emp_detail.findById(id, function (err, emps){
      res.json(emps);
  });
};


module.exports.emp_details_delete = function(req, res) {

  Emp_detail.findByIdAndRemove({_id: req.body.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });

};


