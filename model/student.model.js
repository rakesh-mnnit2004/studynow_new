const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  courses:  { type: String, required: true },  // [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  status: { type: String, enum: ['active', 'inactive'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);