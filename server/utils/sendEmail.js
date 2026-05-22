/* import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// verify connection once (optional but good in prod)
transporter.verify((error, success) => {
  if (error) {
    console.log("Mail server error:", error);
  } else {
    console.log("Mail server is ready");
  }
});

export const sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: `"Your App" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    return true;
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
}; */

/* SMTP_USER=iloveindia007
SMTP_PASS=zzkg yhwh fbmf oooo  */
/* import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Book Fund" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Mail sent:", info.messageId);

    return info;
  } catch (error) {
    console.log("Email Error:", error);
  }
};

export { sendEmail }; */

import nodemailer from "nodemailer";
import dotenv from "dotenv";
import {findByIdAndUpdate} from "../src/models/bookFunModel.js";
dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async ({ id, to, subject, html }) => {
  
  try {

    await transporter.verify();

    console.log("SMTP Connected");

    const info = await transporter.sendMail({
      from: `"Book Fund" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Mail Sent:", info.messageId);
findByIdAndUpdate(id)
    return info;

  } catch (error) {

    console.log("Email Error:", error);
    throw error;
  }
};

export { sendEmail };