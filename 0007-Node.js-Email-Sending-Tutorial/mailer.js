const nodemailer = require("nodemailer");

// Create a transporter object using your SMTP server details
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: "the.code.dynamo@outlook.com",
    pass: "--- password ---",
  },
});

// Define the email data
const mailOptions = {
  from: "the.code.dynamo@outlook.com",
  to: "the.code.dynamo@gmail.com",
  subject: "Sample Email from Node.js with Attachments!",
  //   text: "Hello, This is a sample email sent from Node.js!",
  html: '<p style={color: "maroon"}>Hello, This is a sample <i>email</i> sent from <b>Node.js</b></p>',
  attachments: [
    {
      file: "data.txt",
      path: "./files/data.txt",
    },
    {
      file: "readme.txt",
      path: "./files/readme.txt",
    },
  ],
  // Additional options
  cc: "",
  bcc: "",
  replyTo: "",
  inReplyTo: "",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending mail:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
