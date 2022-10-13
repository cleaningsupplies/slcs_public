const functions = require("firebase-functions");

const config = require("./config.txt")
const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();
const port = config.PORT;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get('/contact/sendForm', (req, res) => {
  res.send('Hello World!')
})

//https://academind.com/tutorials/sending-an-email-with-react-and-cloud-functions#deploying-the-cloud-function
//https://javascript.plainenglish.io/hosting-your-react-js-and-node-js-apps-for-free-with-firebase-6dc670564aca
//https://blog.logrocket.com/8-ways-deploy-react-app-free/#firebase

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.USER,
    pass: config.PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact/sendForm", (req, res) => {
  const name = req.body.details.name;
  const email = req.body.details.email;
  const message = req.body.details.message;

  const mail = {
    from: email,
    to: config.USER,
    subject: "SLCS Contact Form",
    html: ` <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
  };
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json(req.body);
    }
  });
});

exports.api = functions.https.onRequest(app);
