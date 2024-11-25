import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    fullName,
    email,
    contactNumber,
    suburb,
    message,
    services, // Assuming services come as an array from the checkbox
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
        user: "info@bagypainting.com.au", 
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: "info@bagypainting.com.au", // Your SiteGround-hosted email address
      replyTo: email, // Set the reply-to to the user's email address
      to: "info@bagypainting.com.au", // Your receiving email address
      subject: `New Quote Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #081333; background-color: #f9fafb; padding: 20px; border-radius: 10px; border: 1px solid #e0e6ed;">
          <h2 style="color: #265e87; text-align: center; margin-bottom: 20px;">New Quote Request</h2>
          <p style="font-size: 16px; text-align: center; margin-bottom: 20px;">
            You have received a new quote request from your website. Please review the details below and follow up promptly.
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <tr style="background-color: #265e87; color: #ffffff;">
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background-color: #f3f6fa;">
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Contact Number</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${contactNumber}</td>
            </tr>
            <tr>
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Suburb</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${suburb}</td>
            </tr>
            <tr style="background-color: #f3f6fa;">
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Interested Services</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${services.join(
                ", "
              )}</td>
            </tr>
            <tr>
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Message</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
    
          <p style="margin-top: 20px; font-size: 16px; text-align: center; color: #333;">
            This is an important customer inquiry. Please respond to this request to provide a quote or further assistance.
          </p>
          <p style="text-align: center; color: #265e87; font-weight: bold; margin-top: 20px;">Best Regards,</p>
          <p style="text-align: center; color: #265e87;">Bagy Painting</p>
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
