const express = require('express');
const router = express.Router();
const { createStudent, listStudents }=require('./../controller/student.controller');

// Example: Register route
router.post('/create', createStudent);

// Example: Login route
router.get('/list', listStudents);

module.exports = router;