const Student = require('./../model/student.model');

// Create a new student
const createStudent = async (req, res) => {
  try {
    const { name, email, courses } = req.body;
    const newStudent = new Student({ name, email, courses });
    await newStudent.save();
    res.status(201).json({ message: 'Student created successfully', student: newStudent });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// List all students
const listStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 }).populate('courses');
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { createStudent, listStudents };