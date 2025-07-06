
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoute =require('./routes/auth.route');
const studentRoute=require('./routes/student.route');
const authMiddleware =require('./middleware/authorize');
require('dotenv').config(); 

var http = require('http');

var app = express();
app.use(bodyParser.json());
app.use(cors()); 
var server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/studynow', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 
console.log('MongoDB connected')
}).catch(err => {
    console.log(err) 
});


app.use(express.static(path.join(__dirname, 'public')));
//app.use('/dashboard*',express.static(path.join(__dirname, 'public')));
app.get('/dashboard{*any}', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/login{*any}', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/student{*any}', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/register{*any}', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.use("/api/auth", authRoute);
// app.use("/api/course", authRoute);
 app.use("/api/student", authMiddleware,  studentRoute);


server.listen(8000);
console.log('Express server started on port %s', server.address().port);