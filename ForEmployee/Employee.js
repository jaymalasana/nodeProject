const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    initialName : String,
    firstName : String,
    lastName : String,
    fullName: String,
    contactNo: Number,
    email: String,
    roll: String
})

module.exports = mongoose.model("employee", employeeSchema);