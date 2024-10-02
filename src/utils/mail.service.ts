import nodemailer from "nodemailer";
import ApplicationError from "../errors/ApplicationError";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "", pass: "" },
});

export const sendMail = async (
  recieverEmail: string,
  subject: string,
  textContent: string
) => {
  try {
    const mailObject = {
      from: "Shahnawaaz Ansari <shaan.ansari1901@gmail.com>",
      to: recieverEmail,
      subject,
      text: textContent,
    };
    await transporter.sendMail(mailObject);
  } catch (error) {
    throw error;
  }
};
