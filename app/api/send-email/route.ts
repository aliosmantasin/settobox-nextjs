import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, lastName, phone, service, recaptchaToken } = await req.json();

    // reCAPTCHA doğrulaması
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return NextResponse.json({ message: 'reCAPTCHA doğrulaması başarısız' }, { status: 400 });
    }

    // Nodemailer yapılandırması
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT as string, 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Mail gönderme
    const mailOptions = {
      from: process.env.EMAIL,
      to: `ali.osman.tasin@gmail.com, info@settobox.com`,
      subject: 'Yeni Bilgi Alma Formu',
      text: `Yeni bir başvuru alındı:\nAdı: ${firstName} ${lastName}\nEmail: ${email}\nTelefon: ${phone}\nHizmet Türü: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #1e74bd;">Yeni Bilgi Alma Formu</h2>
          <p><strong>Adı:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Hizmet Türü:</strong> ${service}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email başarıyla gönderildi' });
  } catch (error) {
    console.error('API Hatası:', error);
    return NextResponse.json({ message: 'Bir hata oluştu' }, { status: 500 });
  }
}
