const express = require('express');
const authController = require('../controller/auth-controller');
const Doctor = require('../models/Doctor')
const Patient = require("../models/Patient")
const Router = express.Router();


//patient router
Router.post("/Plogin", authController.Plogin)
Router.post("/Preg",authController.Preg)

//doctor router
Router.get("/Dlogin", authController.Dlogin)
Router.get("/Dreg", authController.Dreg)

//token check
Router.post("/Dcheck", authController.Dcheck)
Router.post("/Pcheck", authController.Pcheck)

Router.get("/getinfo", async (req, res)=>{
    const datas = await Doctor.find({});
    console.log(datas);
    res.json({arr: datas})
})

Router.get("/:id",async (req, res)=>{
    const name = req.params.id
    const result = await Doctor.findOne({name})
    res.json({result: result?._doc});
})
module.exports = Router;