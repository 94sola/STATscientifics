import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://stat-scientific.vercel.app",
    ],
  })
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});


app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      organization,
      phone,
      service,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    await transporter.sendMail({
      from: `"STAT Scientific Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,

      subject: `New Website Enquiry - ${
        service || "General Enquiry"
      }`,

      html: `
        <!-- KEEP YOUR EXISTING EMAIL HTML HERE -->
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your enquiry.",
    });
  }
});


app.get("/", (req, res) => {
  res.json({
    message: "STAT Scientific contact server is running.",
  });
});

export default app;