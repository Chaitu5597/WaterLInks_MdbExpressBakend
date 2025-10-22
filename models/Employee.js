
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

// Define your schema fields here

name:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true,
    unique:true
},
phone:{
    type:Number,
    default:false
},
city:{
    type:String,
}

});


module.exports = mongoose.model('Employee', employeeSchema);