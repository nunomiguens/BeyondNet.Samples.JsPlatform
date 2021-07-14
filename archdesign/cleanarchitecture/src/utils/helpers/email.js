const nodemailer = require('nodemailer');

const makeEmailHelper = ({coder}) => {
    return Object.freeze({
        send,
    });

    async function send(options) {
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth: {
                    user: process.env.SMTP_EMAIL,
                    pass: process.env.SMTP_PASSWORD,
                },
            });

            return await transporter.sendMail(buildMessage(options));
        } catch (err) {
            coder.InternalServerError(err.message);
        }
    }

    function buildMessage(options) {
        return {
            from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
            to: options.email,
            subject: options.subject,
            text: options.message,
        };
    }
};

module.exports = makeEmailHelper;
