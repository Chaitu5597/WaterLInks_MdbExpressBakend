// const express = require('express');
// const dotenv = require('dotenv');
// const {MongoClient} = require('mongodb');

// const app = express();

// dotenv.config();

// MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(client => {
//       console.log('✅ Connected to Database');
//   })
//   .catch(error => console.error('❌ Connection Error:', error));




// const port = 5000;

// process.env
// console.log(process.env);

// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });





const express =require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();



const port = process.env.PORT || 5000;


// Middleware 
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Body Parser Middleware
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('✅ Connected to Database');
})
.catch((error)=>{
    console.error('❌ Connection Error:', error);
});


app.use('/employees', employeeRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})




