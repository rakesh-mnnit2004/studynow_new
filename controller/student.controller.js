const Student = require('./../model/student.model');

// Create a new student
const createStudent = (req, res) => {

    const { name, email, courses } = req.body;
    const newStudent = new Student({ name, email, courses });
    newStudent.save().then(student => {
      res.status(201).json({ message: 'Student created successfully', student: newStudent });
        }).catch(err => {
      res.status(500).json({ message: 'Server error', error: err.message });
    });


 
};

// List all students
const listStudents = (req, res) => {

   Student.find().sort({ createdAt: -1 }).populate('courses').then(students => {
        res.json(students);
        }).catch(err => {
      res.status(500).json({ message: 'Server error', error: err.message });
    });


};

module.exports = { createStudent, listStudents };