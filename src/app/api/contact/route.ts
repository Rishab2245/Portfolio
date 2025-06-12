import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import clientPromise from '@/lib/mongodb';
import { generateEmailTemplate } from '@/lib/emailTemplate';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, type } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Store in database
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('contact_submissions');

    const submission = {
      name,
      email,
      subject: subject || 'Contact Form Submission',
      message,
      type: type || 'general',
      submittedAt: new Date(),
      status: 'new',
    };

    await collection.insertOne(submission);

    // Send email notification (if configured)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
  from: process.env.SMTP_FROM || process.env.SMTP_USER,
  to: process.env.CONTACT_EMAIL || 'rishabchaudhary2245@gmail.com',
  subject: `Portfolio Contact: ${subject || 'New Message'}`,
  html: generateEmailTemplate({ name, email, subject, message, type }),
};

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}

