const express = require('express');
const app = express();
const router = express.Router();


var ctrlEmp = require('../controller/emp-details');

// profile
router.get('/emp_details_get', ctrlEmp.emp_details_get);

// authentication
router.post('/emp_details_add', ctrlEmp.emp_details_add);
router.post('/emp_details_edit', ctrlEmp.emp_details_edit);

router.post('/emp_details_delete', ctrlEmp.emp_details_delete);
router.post('/emp_details_update', ctrlEmp.emp_details_update);

module.exports = router;
