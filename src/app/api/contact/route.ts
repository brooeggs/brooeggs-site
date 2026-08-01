import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "support@brooeggs.com";
const FROM_EMAIL = "Broog's Contact Form <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, newsletter } = body;

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !subject || !message?.trim()) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const subjectLabels: Record<string, string> = {
      order: "Place an Order",
      wholesale: "Wholesale / Bulk Pricing",
      delivery: "Delivery Enquiry",
      quality: "Quality / Feedback",
      partnership: "Farm Partnership",
      other: "Other",
    };

    const subjectLabel = subjectLabels[subject] ?? subject;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Broog's Contact] ${subjectLabel} — ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5edd8; padding: 32px 24px; border-radius: 16px;">
          <div style="background: linear-gradient(135deg, #1C0D07, #6B4C2A); border-radius: 14px; padding: 28px 32px; margin-bottom: 24px;">
            <h1 style="margin: 0; color: #F0C040; font-size: 1.4rem; font-weight: 800; letter-spacing: 1px;">🥚 Broog's</h1>
            <p style="margin: 6px 0 0; color: rgba(255,255,255,0.7); font-size: 0.85rem;">New Contact Form Submission</p>
          </div>

          <div style="background: white; border-radius: 14px; padding: 28px 32px; border: 1px solid #E8D5B0; margin-bottom: 16px;">
            <h2 style="margin: 0 0 20px; color: #6B4C2A; font-size: 1.1rem; font-weight: 700; border-bottom: 2px solid #f5edd8; padding-bottom: 12px;">
              📋 Contact Details
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #7A7A7A; font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; width: 120px;">Name</td>
                <td style="padding: 8px 0; color: #1A1A1A; font-size: 0.92rem; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7A7A7A; font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #B8860B; font-size: 0.92rem;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 0; color: #7A7A7A; font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #B8860B; font-size: 0.92rem;">${phone}</a></td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #7A7A7A; font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Subject</td>
                <td style="padding: 8px 0;">
                  <span style="background: rgba(212,160,23,0.12); color: #B8860B; padding: 3px 12px; border-radius: 99px; font-size: 0.82rem; font-weight: 700;">${subjectLabel}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7A7A7A; font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Newsletter</td>
                <td style="padding: 8px 0; color: #1A1A1A; font-size: 0.92rem;">${newsletter ? "✅ Subscribed" : "No"}</td>
              </tr>
            </table>
          </div>

          <div style="background: white; border-radius: 14px; padding: 28px 32px; border: 1px solid #E8D5B0; margin-bottom: 16px;">
            <h2 style="margin: 0 0 14px; color: #6B4C2A; font-size: 1.1rem; font-weight: 700;">💬 Message</h2>
            <p style="margin: 0; color: #4A4A4A; font-size: 0.92rem; line-height: 1.75; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="text-align: center; color: #7A7A7A; font-size: 0.78rem; margin: 0;">
            This email was sent from the contact form at <strong>brooeggs.com</strong>.<br/>
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
