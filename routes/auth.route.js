const express = require('express');
const router = express.Router();
const { validateLogin, userRegistration }= require('./../controller/auth.controller');
const {body, validationResult }=require('express-validator')

// Example: Register route
router.post('/register', userRegistration);

// Example: Login route
router.post(  '/login', validateLogin );

router.get('/test', (req,res)=>{
  res.json({msg:"welcome"});
})

module.exports = router;