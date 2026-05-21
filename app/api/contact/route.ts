import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px">
      <h2 style="color:#4f46e5">Nowa wiadomość ze SprintPMC</h2>
      <p><strong>Imię:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ""}
      <p><strong>Wiadomość:</strong></p>
      <p style="background:#f8fafc;padding:16px;border-left:4px solid #6366f1;border-radius:4px">
        ${message.replace(/\n/g, "<br>")}
      </p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "SprintPMC Contact <onboarding@resend.dev>",
      to: ["info@sprintpmc.com"],
      reply_to: email,
      subject: `Nowa wiadomość od ${name}${company ? ` (${company})` : ""}`,
      html,
    }),
  });

  if (res.ok) return NextResponse.json({ ok: true });
  const err = await res.text();
  console.error("Resend error:", err);
  return NextResponse.json({ error: "Send failed" }, { status: 500 });
}
