
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoute =require('./routes/auth.route');

var http = require('http');

var app = express();
app.use(bodyParser.json());
app.use(cors)
var server = http.createServer(app);

mongoose.connect('mongodb://0.0.0.0:27017/studynow', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 
console.log('MongoDB connected')
}).catch(err => {
    console.log(err) 
});


app.use(express.static(path.join(__dirname, 'public')));
app.use("/api/auth", authRoute);
app.use("/api/course", authRoute);
app.use("/api/student", authRoute);


server.listen(8000);
console.log('Express server started on port %s', server.address().port);