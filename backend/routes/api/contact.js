const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { validationResult, body } = require("express-validator");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    type: "login",
    user: process.env.CONTACT_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

const mailData = (name, email, message) => {
  return {
    from: process.env.CONTACT_EMAIL,
    to: process.env.TO_EMAIL,
    subject: `Message from ${name} <${email}>`,
    text: message,
  };
};

const mailDataReply = (email) => {
  return {
    from: process.env.CONTACT_EMAIL,
    to: email,
    subject: "Thank you for your message",
    text: ``,
  };
};

router.post(
  "/",
  body("name")
    .escape()
    .trim()
    .isLength({ min: 2 })
    .withMessage("Name is required"),
  body("email")
    .escape()
    .isEmail()
    .withMessage("Email is required")
    .normalizeEmail(),
  body("message")
    .escape()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Message is required"),
  (req, res) => {
    const { name, email, message } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    transporter.sendMail(mailData(name, email, message), (err, _info) => {
      if (err) {
        res.status(500).json({ message: "Internal server error" });
      } else {
        const mailDataReply = {
          from: process.env.CONTACT_EMAIL,
          to: email,
          subject: "Thank you for your message",
          text: "I will get back to you as soon as possible",
        };
        transporter.sendMail(mailDataReply, (err, info) => {
          if (err) {
            res.status(500).json({ message: "Internal server error" });
          } else {
            res.status(200).json({ message: "Message received" });
          }
        });
      }
    });
  }
);

module.exports = router;
