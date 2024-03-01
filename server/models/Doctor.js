const mongoose = require("mongoose");

const doctor = {
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

const doctorModel = mongoose.model("doctor", doctor);

module.exports = doctorModel;
