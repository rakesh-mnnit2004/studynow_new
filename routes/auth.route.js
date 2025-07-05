const express = require('express');
const router = express.Router();
const { validateLogin, userRegistration }= require('./../controller/auth.controller');
const {check, validationResult }=require('express-validator')


  const userValidationRules = [
        check('email').isEmail().withMessage('Invalid email address'),
        check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ];

const validate = (req, res, next) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        const extractedErrors = [];
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

        return res.status(422).json({ errors: extractedErrors });
    };
// Example: Register route
router.post('/register', userValidationRules, validate, userRegistration);

// Example: Login route
router.post(  '/login', userValidationRules, validate, validateLogin );

router.get('/test', (req,res)=>{
  res.json({msg:"welcome"});
})

module.exports = router;