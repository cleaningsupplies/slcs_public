const cors = require("cors");
const express = require("express");

const app = express()

app.use(cors());

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/contact/hi', (req, res) => {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

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
