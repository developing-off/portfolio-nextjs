//import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
   const { email, subject, message } = await req.json();
   console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: "Hello world",
      react: (
        <>
          <h1>{message}</h1>
          <p>Thank you for contacting us!</p>
          <p>We will get back to you as soon as possible.</p>
          <p>Best regards,</p>
          <p>New message sumbited:</p>

          <p>{subject}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
