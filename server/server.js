import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


app.use(
  cors({
    origin: "http://localhost:5173",
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

transporter.verify((error) => {
  if (error) {
    console.error("SMTP connection failed:");
    console.error(error.message);
  } else {
    console.log("SMTP server is ready.");
  }
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
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>New STAT Scientific Enquiry</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 40px 20px;
            background: #f5f5f5;
            font-family: Arial, Helvetica, sans-serif;
            color: #171717;
          "
        >

          <div
            style="
              max-width: 700px;
              margin: 0 auto;
              background: #ffffff;
              border: 1px solid #e5e5e5;
            "
          >

            <!-- Header -->

            <div
              style="
                background: #661c48;
                padding: 30px;
                color: white;
              "
            >
              <p
                style="
                  margin: 0 0 8px;
                  font-size: 12px;
                  letter-spacing: 3px;
                  text-transform: uppercase;
                  color: rgba(255,255,255,0.65);
                "
              >
                STAT Scientific
              </p>

              <h1
                style="
                  margin: 0;
                  font-size: 25px;
                  font-weight: 500;
                "
              >
                New Website Enquiry
              </h1>
            </div>

            <!-- Content -->

            <div style="padding: 35px;">

              <h2
                style="
                  margin: 0 0 25px;
                  font-size: 18px;
                  font-weight: 600;
                "
              >
                Client Information
              </h2>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="border-collapse: collapse;"
              >

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                      color: #737373;
                      width: 180px;
                    "
                  >
                    Full Name
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                      font-weight: 600;
                    "
                  >
                    ${escapeHtml(name)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                      color: #737373;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                    "
                  >
                    ${escapeHtml(email)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                      color: #737373;
                    "
                  >
                    Organization
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                    "
                  >
                    ${escapeHtml(organization || "Not provided")}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                      color: #737373;
                    "
                  >
                    Phone
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                    "
                  >
                    ${escapeHtml(phone || "Not provided")}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                      color: #737373;
                    "
                  >
                    Area of Interest
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #eeeeee;
                    "
                  >
                    ${escapeHtml(service || "Not specified")}
                  </td>
                </tr>

              </table>

              <!-- Enquiry -->

              <h2
                style="
                  margin: 35px 0 15px;
                  font-size: 18px;
                  font-weight: 600;
                "
              >
                Client Enquiry
              </h2>

              <div
                style="
                  padding: 20px;
                  background: #f7f7f7;
                  border-left: 4px solid #BF5495;
                  line-height: 1.7;
                  white-space: pre-wrap;
                "
              >
                ${escapeHtml(message)}
              </div>

              <!-- Footer -->

              <p
                style="
                  margin-top: 35px;
                  padding-top: 20px;
                  border-top: 1px solid #eeeeee;
                  font-size: 12px;
                  line-height: 1.6;
                  color: #737373;
                "
              >
                This enquiry was submitted through the
                STAT Scientific website contact form.
              </p>

            </div>

          </div>

        </body>
        </html>
      `,
    });

  
    return res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });

  } catch (error) {
    console.error("CONTACT FORM ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your enquiry.",
    });
  }
});


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.get("/", (req, res) => {
  res.json({
    message: "STAT Scientific contact server is running.",
  });
});

app.listen(PORT, () => {
  console.log(`STAT Scientific server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});