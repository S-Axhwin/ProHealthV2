const express = require('express');
const connect = require('./connect/connect')
const cors = require('cors')
const app = express()
app.use(cors())

const authRouter = require("./Router/auth-router")
app.use(express.json())

app.use("/auth", authRouter);
app.get("/api", (req, res)=>{
    res.json({status: true})
})
connect().then(()=>{
    const PORT = process.env.PORT || 5002
    app.listen(PORT, ()=>{
        console.log(PORT);
    })
})