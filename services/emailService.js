const nodemailer = require('nodemailer');
async function sendMail({ from, to, subject, text, html }) {
	let transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure:false,
        auth: {
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASSWORD,
        }
    });

    //method of nodemailer

    let info = await transporter.sendMail({
        //key and value is same so, write once like instead of to:to write(to,)
        from: `FileTreaT<${from}`,
        to,
        subject,
        text,
        html
    });

    
}

module.exports = sendMail;