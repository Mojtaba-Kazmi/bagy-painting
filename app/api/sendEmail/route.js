import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    email,
    firstName,
    lastName,
    contactNumber,
    companyName,
    businessPostcode,
    operatingSouthAustralia,
    services,
    message,
    newsletter,
    recaptchaToken,
  } = await request.json();

  // Validate reCAPTCHA
  const recaptchaRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    { method: "POST" }
  );
  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success) {
    return NextResponse.json(
      { message: "reCAPTCHA validation failed" },
      { status: 400 }
    );
  }

  try {
    // Create a transporter using SiteGround SMTP settings
    const transporter = nodemailer.createTransport({
      host: "mail.bagypainting.com.au", // SiteGround SMTP server
      port: 465, // Use 465 for SSL
      secure: true, // true for SSL
      auth: {
        user: "info@bagypainting.com.au", // Your email address on the SiteGround server
        pass: process.env.EMAIL_PASSWORD, // Your email account password (use an environment variable for security)
      },
    });

    // Email options
    const mailOptions = {
      from: "info@bagypainting.com.au", // Use your SiteGround-hosted email address
      replyTo: email, // Set the reply-to to the user's email address
      to: "info@bagypainting.com.au", // Your receiving email address
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
      <h2 style="color: #0d7ec0; text-align: center;">New Contact Form Submission</h2>
      <p style="font-size: 16px; text-align: center;">You've received a new message from your website's contact form.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <tr style="background-color: #f0037b; color: #ffffff;">
          <td style="padding: 15px; border: 1px solid #ddd;"><strong>Name:</strong></td>
          <td style="padding: 15px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 15px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr style="background-color: #e3f2fd;">
          <td style="padding: 15px; border: 1px solid #ddd;"><strong>Contact Number:</strong></td>
          <td style="padding: 15px; border: 1px solid #ddd;">${contactNumber}</td>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd;"><strong>Company Name:</strong></td>
          <td style="padding: 15px; border: 1px solid #ddd;">${companyName}</td>
        </tr>
        <tr style="background-color: #e3f2fd;">
          <td style="padding: 15px; border: 1px solid #ddd;"><strong>Business Postcode:</strong></td>
          <td style="padding: 15px; border: 1px solid #ddd;">${businessPostcode}</td>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd;"><strong>Operating in South Australia:</strong></td>
          <td style="padding: 15px; border: 1px solid #ddd;">${
            operatingSouthAustralia ? "Yes" : "No"
          }</td>
        </tr>
        <tr style="background-color: #e3f2fd;">
          <td style="padding: 15px; border: 1px solid #ddd;"><strong>Interested Services:</strong></td>
          <td style="padding: 15px; border: 1px solid #ddd;">${services.join(
            ", "
          )}</td>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd;"><strong>Message:</strong></td>
          <td style="padding: 15px; border: 1px solid #ddd;">${message}</td>
        </tr>
        <tr style="background-color: #e3f2fd;">
          <td style="padding: 15px; border: 1px solid #ddd;"><strong>Newsletter Subscription:</strong></td>
          <td style="padding: 15px; border: 1px solid #ddd;">${
            newsletter ? "Yes" : "No"
          }</td>
        </tr>
      </table>

      <p style="margin-top: 20px; font-size: 16px; text-align: center;">This is a notification for your records. Please follow up with the interested party.</p>
      <p style="text-align: center; color: #0d7ec0; font-weight: bold;">Best Regards,</p>
      <p style="text-align: center; color: #0d7ec0;">Angelica Uniforms</p>
    </div>
  `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
