const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fullname: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    }
}, {
    timestamps: true
});
const Student = mongoose.model('student',studentSchema);

module.exports = Student;