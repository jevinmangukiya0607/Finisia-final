// // require('dotenv').config()

// const sgMail = require('@sendgrid/mail')

// // const { SG_API_KEY,FROM_EMAIL, TO_EMAIL } = process.env

// sgMail.setApiKey(process.env.SG_API_KEY)

// export default async function handler(req, res) {

//     const { name, email, subject, message } = req.body

//     const msg = {
//         to: `${process.env.TO_EMAIL}`,
//         from: `${process.env.FROM_EMAIL}`,
//         subject: 'Finisia Contact',
//         html: `<p><strong>Name: </strong>${name}</p> 
//         <p><strong>Eqail: </strong>${email}</p> 
//         <p><strong>Eqail: </strong>${subject}</p> 
//         <p><strong>Message: </strong>${message}</p>`

//     };

//     await sgMail.send(msg);
//     // res.json({success:true});
//     res.status(200).json({ status:'ok'});
// }

import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "example@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};