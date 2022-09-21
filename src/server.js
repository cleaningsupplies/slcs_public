const config = require("./config.js");

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, ()=> console.log("Server running"));

const contactEmail = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: config.login.user,
        pass: config.login.pass
    }
});

contactEmail.verify((error) => {
    if(error){
        console.log(error);
    }else{
        console.log("ready to send")
    }
})