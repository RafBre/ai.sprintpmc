import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return NextResponse.json({ error: "Email not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#1e293b">
      <div style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:24px 32px;border-radius:12px 12px 0 0">
        <h2 style="color:white;margin:0;font-size:20px">Nowa wiadomość ze SprintPMC</h2>
      </div>
      <div style="background:#f8fafc;padding:32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:13px;width:120px">Imię i nazwisko</td>
            <td style="padding:8px 0;font-weight:600">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:13px">Email</td>
            <td style="padding:8px 0"><a href="mailto:${email}" style="color:#4f46e5">${email}</a></td>
          </tr>
          ${company ? `<tr><td style="padding:8px 0;color:#64748b;font-size:13px">Firma</td><td style="padding:8px 0;font-weight:600">${company}</td></tr>` : ""}
        </table>
        <div style="margin-top:20px;padding:20px;background:white;border-left:4px solid #6366f1;border-radius:4px">
          <p style="margin:0 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.05em">Wiadomość</p>
          <p style="margin:0;line-height:1.6">${message.replace(/\n/g, "<br>")}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#94a3b8">
          Wiadomość wysłana przez formularz kontaktowy na sprintpmc.com
        </p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"SprintPMC Kontakt" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `✉ Nowa wiadomość od ${name}${company ? ` (${company})` : ""}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
