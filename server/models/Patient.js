const mongoose = require("mongoose");

const Patient = {
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}

const PatientModel = mongoose.model("patient", Patient);

module.exports = PatientModel;
