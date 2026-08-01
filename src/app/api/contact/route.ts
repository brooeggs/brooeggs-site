import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL   = "support@brooeggs.com";
const FROM_EMAIL = "Broog's Website <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, newsletter } = body;

    if (!name?.trim() || !email?.trim() || !subject || !message?.trim()) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
    }

    const subjectLabels: Record<string, string> = {
      order:       "Place an Order",
      wholesale:   "Wholesale / Bulk Pricing",
      delivery:    "Delivery Enquiry",
      quality:     "Quality / Feedback",
      partnership: "Farm Partnership",
      other:       "Other",
    };
    const subjectLabel = subjectLabels[subject] ?? subject;
    const now = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "long",
      timeStyle: "short",
    });

    const { error } = await resend.emails.send({
      from:    FROM_EMAIL,
      to:      TO_EMAIL,
      replyTo: email,
      subject: `[Broog's] ${subjectLabel} — ${name}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission — Broog's</title>
</head>
<body style="margin:0;padding:0;background:#F0EAD6;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0EAD6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#2C1A0A 0%,#3D2810 50%,#5A3618 100%);border-radius:16px 16px 0 0;padding:32px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(240,192,64,0.7);">EGGCELLENCE SINCE 2025</p>
                    <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;font-weight:800;color:#F0C040;letter-spacing:0.5px;">🥚 Broog's</h1>
                    <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.65);">New enquiry from your website contact form</p>
                  </td>
                  <td align="right" valign="middle">
                    <div style="background:rgba(240,192,64,0.15);border:1px solid rgba(240,192,64,0.3);border-radius:8px;padding:8px 14px;display:inline-block;">
                      <p style="margin:0;font-size:11px;font-weight:700;color:#F0C040;text-transform:uppercase;letter-spacing:1px;">New Message</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SUBJECT BANNER -->
          <tr>
            <td style="background:#C8851A;padding:12px 36px;">
              <p style="margin:0;font-size:13px;font-weight:700;color:#fff;letter-spacing:0.3px;">
                📋 Subject: ${subjectLabel}
              </p>
            </td>
          </tr>

          <!-- CONTACT DETAILS CARD -->
          <tr>
            <td style="background:#ffffff;padding:28px 36px 0;">
              <h2 style="margin:0 0 20px;font-family:Georgia,serif;font-size:16px;font-weight:700;color:#2C1A0A;border-bottom:2px solid #F0EAD6;padding-bottom:12px;">
                👤 Contact Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:9px 0;border-bottom:1px solid #F5F0E8;width:110px;vertical-align:top;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#9E8E75;">Name</span>
                  </td>
                  <td style="padding:9px 0;border-bottom:1px solid #F5F0E8;vertical-align:top;">
                    <span style="font-size:14px;font-weight:600;color:#2C1A0A;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:9px 0;border-bottom:1px solid #F5F0E8;vertical-align:top;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#9E8E75;">Email</span>
                  </td>
                  <td style="padding:9px 0;border-bottom:1px solid #F5F0E8;vertical-align:top;">
                    <a href="mailto:${email}" style="font-size:14px;font-weight:600;color:#C8851A;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `<tr>
                  <td style="padding:9px 0;border-bottom:1px solid #F5F0E8;vertical-align:top;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#9E8E75;">Phone</span>
                  </td>
                  <td style="padding:9px 0;border-bottom:1px solid #F5F0E8;vertical-align:top;">
                    <a href="tel:${phone}" style="font-size:14px;font-weight:600;color:#C8851A;text-decoration:none;">${phone}</a>
                  </td>
                </tr>` : ""}
                <tr>
                  <td style="padding:9px 0;border-bottom:1px solid #F5F0E8;vertical-align:top;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#9E8E75;">Subject</span>
                  </td>
                  <td style="padding:9px 0;border-bottom:1px solid #F5F0E8;vertical-align:top;">
                    <span style="display:inline-block;background:rgba(200,133,26,0.1);color:#A86E10;padding:3px 12px;border-radius:99px;font-size:12px;font-weight:700;">${subjectLabel}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:9px 0;vertical-align:top;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#9E8E75;">Newsletter</span>
                  </td>
                  <td style="padding:9px 0;vertical-align:top;">
                    <span style="font-size:14px;color:#2C1A0A;">${newsletter ? "✅ Opted in" : "Not subscribed"}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- MESSAGE CARD -->
          <tr>
            <td style="background:#ffffff;padding:24px 36px 28px;">
              <h2 style="margin:0 0 14px;font-family:Georgia,serif;font-size:16px;font-weight:700;color:#2C1A0A;border-bottom:2px solid #F0EAD6;padding-bottom:12px;">
                💬 Message
              </h2>
              <div style="background:#FAF6EE;border-left:3px solid #C8851A;border-radius:0 8px 8px 0;padding:16px 18px;">
                <p style="margin:0;font-size:14px;color:#3D3526;line-height:1.8;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- ACTION BUTTONS -->
          <tr>
            <td style="background:#ffffff;padding:0 36px 28px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="mailto:${email}?subject=Re: ${subjectLabel} — Broog's" style="display:inline-block;background:#C8851A;color:#ffffff;text-decoration:none;padding:11px 22px;border-radius:99px;font-size:13px;font-weight:700;">
                      ↩ Reply to ${name}
                    </a>
                  </td>
                  ${phone ? `<td>
                    <a href="tel:${phone}" style="display:inline-block;background:#2C1A0A;color:#ffffff;text-decoration:none;padding:11px 22px;border-radius:99px;font-size:13px;font-weight:700;">
                      📞 Call Back
                    </a>
                  </td>` : ""}
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#2C1A0A;border-radius:0 0 16px 16px;padding:20px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">
                      Received on ${now} (IST) &nbsp;·&nbsp; brooeggs.com
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-size:12px;color:rgba(240,192,64,0.6);font-weight:700;">
                      Broog's 🥚
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
  }
}
