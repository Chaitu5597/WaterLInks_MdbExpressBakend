
const exprss = require('express');
const router = exprss.Router();
const  createEmployee  = require('../controllers/employeeController');
const employee = require('../models/Employee');



// methods post , get , put , delete,patch

// Route to create a new employee
router.post('/addemployees', createEmployee.createEmployee);

// Route to get all employees
router.get('/getemployees', createEmployee.getEmployees);

// Route to get a single employee by ID
router.get('/getemployee/:id', createEmployee.singleEmployee);

//Route to update an employee by ID
router.put('/updateemployee/:id', createEmployee.updateEmployee);

// Route to delete an employee by ID
router.delete('/deleteemployee/:id', createEmployee.deleteEmployee);

module.exports = router;