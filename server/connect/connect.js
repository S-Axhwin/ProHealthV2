const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb+srv://ashwinsathiya:EHRprEITpjmFEXmX@first.n1as9m8.mongodb.net/test?retryWrites=true&w=majority&appName=first';

// Connect to the MongoDB server
connection = async()=>{
    try{
        await mongoose.connect(url);
        console.log('connected to db');
    }catch(err){
        console.log(err);
    }
}


module.exports = connection