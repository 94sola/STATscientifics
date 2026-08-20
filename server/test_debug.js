import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

console.log("Current ENV variables:");
console.log("SMTP_HOST:", process.env.SMTP_HOST || "(not set)");
console.log("SMTP_PORT:", process.env.SMTP_PORT || "(not set)");
console.log("SMTP_USER:", process.env.SMTP_USER || "(not set)");
console.log("RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL || "(not set)");

if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
  console.log("\n-> SMTP credentials are missing in .env file!");
} else {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"STAT Scientific Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: "test@example.com",
      subject: "Test",
      html: "<p>Test</p>"
    });
    console.log("Mail sent successfully!");
  } catch (err) {
    console.error("Nodemailer error detailed:", err.message);
  }
}
