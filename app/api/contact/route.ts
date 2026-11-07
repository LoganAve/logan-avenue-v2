import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, business, service, message } = await request.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !message.trim() ||
      name.length > 150 ||
      email.length > 254 ||
      message.length > 5000 ||
      (business != null && typeof business !== "string") ||
      (service != null && typeof service !== "string") ||
      (typeof business === "string" && business.length > 200) ||
      (typeof service === "string" && service.length > 100)
    ) {
      return NextResponse.json(
        { error: "Please provide valid contact information." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error("Resend API key is not configured.");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const escapeHtml = (value: string) =>
      value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };

        return entities[character];
      });

    const { error } = await resend.emails.send({
      from: "Logan Avenue Website <inquiries@logansdesign.com>",
      to: ["loganavenuecreative@gmail.com"],
      replyTo: email,
      subject: `New website inquiry from ${name.replace(/[\r\n]/g, " ")}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "Not selected")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json(
        { error: "Unable to send your inquiry. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
