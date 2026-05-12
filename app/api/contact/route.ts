import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    // In production, integrate Resend or Nodemailer here:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@alexrivera.dev",
    //   to: "alex@alexrivera.dev",
    //   subject: `Portfolio Contact: ${body.subject || "New message"}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    // });

    // Simulate a small delay for realism
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("Contact form submission:", { name, email, subject: body.subject, message });

    return NextResponse.json({ success: true, message: "Message received! I'll be in touch soon." });
  } catch {
    return NextResponse.json({ error: "Internal server error. Please try again." }, { status: 500 });
  }
}
