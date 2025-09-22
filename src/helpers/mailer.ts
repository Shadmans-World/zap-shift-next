import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

interface sendEmailType {
  email: string;
  emailType: string;
  userId: string;
}

export const sendEmail = async ({
  email,
  emailType,
  userId,
}: sendEmailType) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 360000,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USER_ID,
        pass: process.env.NODEMAILER_USER_PASS,
      },
    });

    const mailOptions = {
      from: '"Zap Shift" <admin@zapshift.com>',
      to: email,
      subject:
        emailType === "VERIFY" ? "verify your email" : "Reset Your Password",

      html: `<p>Click <a href="${process.env.DOMAIN}/verifyEmail?token=${hashedToken}">here<a/> to ${emailType === "VERIFY" ? "verify your email" : "Reset Your Password"} or copy and paste the link below in your browser.
      <br/>
      ${process.env.DOMAIN}/verifyEmail?token=${hashedToken}
      </p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
