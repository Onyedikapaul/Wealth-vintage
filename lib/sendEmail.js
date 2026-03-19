import transporter from "./mailer.js";

async function sendEmail({ to, subject, html }) {
  const info = await transporter.sendMail({
    from: `"Wealth Vintage" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });

  return info;
}

export default sendEmail;
