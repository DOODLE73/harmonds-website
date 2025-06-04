// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require("path");


const app = express();
const PORT = process.env.PORT ||5000;

app.use(cors());
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

// ✅ Make sure this route is correct
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received form:', req.body); // for debugging

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yt.micminute90@gmail.com', // replace with your gmail
        pass: 'pqhkudwudjwomevp' // replace with your app password
      }
    });

    const mailOptions = {
      from: email,
      to: 'yt.micminute90@gmail.com',
      subject: `Message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent!');
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).send('Email failed!');
  }
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/:path(*)", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
