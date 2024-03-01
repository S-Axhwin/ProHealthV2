const jwt = require("jsonwebtoken")


const doctor = require("../models/Doctor")

const Patient = require("../models/Patient");

//token check API
const Pcheck = async (req, res)=>{
    console.log('came into login');
    const {token} = req.body;
    try{
        const check = await jwt.verify(token, "Phash");
        console.log(check);
        if(check){
            res.json({status: true, mess: "verified"});
        }else{
            res.json({status: false, mess: "not valid token"})
        }
    }catch(err){
        res.json({status: false})
    }
}
const Dcheck = async (req, res)=>{
    const {token} = req.body;
    try{
        const check = await jwt.verify(token, "Dhash");
        console.log(check);
        if(check){
            res.json({status: true, mess: "verified"});
        }else{
            res.json({status: false, mess: "not valid token"})
        }
    }catch(err){
        res.json({status: false})
    }
}


//REG API CONTROLLER

const Preg = async (req, res)=>{
    console.log(req.body);
    const { name, password, email} = req.body;
    console.log(name!='' && password!='' && email!='');
    if(name!='' && password!='' && email!=''){
        //console.log(username, password);
        try{
            await Patient.create({name, password, email});
            const newToken = await jwt.sign({name, password, email}, "Phash");
            res.json({status: true, mess: "user created", token: newToken});
            return 0;
        }catch(err){
            res.json({status: false, mess: "email already exist"});
            return
        }
    }
    res.json({status: false})
    
}
const Dreg = async (req, res)=>{
    console.log(req.body);
    const { name, password, email} = req.body;
    //console.log(username, password);
    try{
        await doctor.create({name, password, email});
        const newToken = await jwt.sign({name, password, email}, "Dhash");
        res.json({status: true, mess: "user created", token: newToken});
        return 0;
    }catch(err){
        res.json({status: false, mess: "email already exist"});
        return
    }
}


//login api

const Plogin = async(req, res)=>{
    console.log(req.body);
    const {email, password} = req.body;
    try{
        const isExist = await Patient.find({email, password});
        console.log(isExist);
        if(isExist){
            const token = await jwt.sign({email, password}, "Phash")
            res.json({status: true, mess: "logged in", token})
        }else{
            res.json({status: false, mess: "email or password is wrong"})
        }
    }catch(err){
        console.log('fuck');
    }
}
const Dlogin = async(req, res)=>{
    const {email, password} = req.body;
    console.log(email, password);
    try{
        const isExist = await doctor.findOne({email, password})
    }catch(e){

        if(isExist){
            res.json({status: true, mess: "logged in"})
        }else{
            res.json({status: false, mess: "email or password is wrong"})
        }
    }
}

module.exports = {
    Plogin,
    Preg,
    Dlogin,
    Dreg,
    Dcheck,
    Pcheck,
}