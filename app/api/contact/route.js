import { Resend } from "resend";

export async function GET() {
  return Response.json({ message: "Hello World" });
}

const API_KEY = process.env.RESENDAPI_KEY;

export async function POST(req) {
  const resend = new Resend(API_KEY);
  const body = await req.json();

  try {
    const emailRes = await resend.emails.send({
      from: "GDCF <onboarding@resend.dev>",
      to: "i.dabral26@gmail.com",
      subject: "Contact, game dev",
      html: ` <h2>Game Dev Contact form</h2>
                <p>
                    Name: <b>${body.name}</b>
                </p> 
                <p>
                    Email: <b>${body.email}</b>
                </p>
                <hr>
                <p>${body.message}</p>
            `,
    });
  } catch (err) {
    console.log("error sending email: ", err);
  }

  console.log(body);
  return Response.json({ message: body });
}
