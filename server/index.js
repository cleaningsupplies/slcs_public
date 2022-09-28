const config = require("./config/index.js")
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

// app.post('/contact/sendForm', (req, res) => {
//   res.send(req.body)
// })

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

/*
const express = require('express');
const bodyParser = require("body-parser");

const mailer = require("./mailer")

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})

app.post('/contact', (req, res) => {
  const { email = '', name = '', message = '' } = req.body

  mailer({ email, name, text: message }).then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('/#error');
  })
})



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})

*/
