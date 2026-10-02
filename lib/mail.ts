import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendWelcomeEmail(email: string, otp: string) {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "ElevateX 4.0 Registration",
            html: `
        <h3>Greetings from IEEE JUSB!</h3>
        <p>Congratulations for registering to ElevateX, a series of webinars aimed at helping you elevate your skills to the next level!</p>
        <p>Use this code to verify your email - <b>${otp}</b></p>
        <p>Get ready to witness a plethora of interesting sessions - on coding, electronics, higher studies, and much more!</p>
        <p>Did we also say that you get to network with industry experts and clear all your doubts?</p>
        <p>Please feel free to reply to reach out to us on our official WhatsApp groups if you have any queries!.
        Join our WhatsApp group for further updates:  </p>
        <p>PS: Don't forget to register for the individual sessions over at https://elevatex3.ieee-jaduniv.in/dashboard! Don't worry, we'll email you the joining link for each event before it starts, or you can find it over at your dashboard on the website, as per your convenience </p>
        <h3>Warm wishes,</h3>
        <h3>IEEE JUSB.</h3>`,
        });
    } catch (error) {
        console.error("Failed to send welcome email:", error);
    }
}