const e = require('express');
const Employee = require('../models/Employee');


// function to create a new employee
const createEmployee = async (req, res) => {
    try{
        const { name, email, phone, city } = req.body;
        const employee = new Employee({
            name,
            email,
            phone,  
            city
        });
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}




// function to get all employees
const getEmployees = async (req, res) => {
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }
    catch (error) {
        console.log("internel server error:",error);
        res.status(500).json({ message: 'Server Error', error });
    }
}


//single employee fetch
const singleEmployee = async (req, res) => {
    try {
        const employeeId = await Employee.findById(req.params.id);
        res.status(200).json(employeeId);
        if (!employeeId) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        else {
            res.status(200).json(employeeId);
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}



// single employee update

const updateEmployee = async (req,res)=>{

    try{
        const { name,email,phone,city } = req.body;
        
        const myEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name, email, phone, city },
            { new: true }
        );
        
        if(!myEmployee){
            return 
            res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully', myEmployee });
    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error });
    }
   

}



//delete employee

const deleteEmployee = async (req,res)=>{

    try{
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Employee deleted successfully', deletedEmployee });
        if(!deletedEmployee){
            return res.status(404).json({ message: 'Employee not found' });
        }
    }catch(error){
        res.status(500).json({ message: 'Server Error', error });
    }

}

module.exports = {
    createEmployee , getEmployees , singleEmployee ,updateEmployee ,deleteEmployee
};