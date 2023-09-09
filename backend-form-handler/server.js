const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'cryptonicyash@gmail.com', // Your Gmail email address
    pass: 'yshtygi@1',  // Your Gmail password
  },
});

app.post('/api/sendEmail', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Compose the email message
    const mailOptions = {
      from: ${email},
      to: 'cryptonicyash@gmail.com', // The recipient's email address
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.sendStatus(200); // OK
  } catch (error) {
    console.error('Error sending email:', error);
    res.sendStatus(500); // Internal Server Error
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
