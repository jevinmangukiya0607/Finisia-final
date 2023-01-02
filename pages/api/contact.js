// require('dotenv').config()

const sgMail = require('@sendgrid/mail')

// const { SG_API_KEY,FROM_EMAIL, TO_EMAIL } = process.env

sgMail.setApiKey(process.env.SG_API_KEY)

export default async function handler(req, res) {

    const { name, email, subject, message } = req.body
    
    const msg = {
        to: `${process.env.TO_EMAIL}`,
        from: `${process.env.FROM_EMAIL}`,
        subject: 'Finisia Contact',
        html: `<p><strong>Name: </strong>${name}</p> 
        <p><strong>Eqail: </strong>${email}</p> 
        <p><strong>Eqail: </strong>${subject}</p> 
        <p><strong>Message: </strong>${message}</p>`

    };

    await sgMail.send(msg);
    // res.json({success:true});
    res.status(200).json({ status:'ok'});
}