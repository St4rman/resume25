import { Resend } from 'resend';

export async function GET() {
  return Response.json({ message: 'Hello World' })
}
const API_KEY = process.env.RESENDAPI_KEY;


export async function POST(req){

    const resend = new Resend(API_KEY);
    const body = await req.json();

    try{
        const emailRes = await resend.emails.send({
            from: 'Game dev Contact form <onboarding@resend.dev>',
            to: 'i.dabral26@gmail.com',
            subject: 'Contact from website contact form, game dev',
            html: ` <h1>new message recieved!</h1>
            <h3>Game dev form</h3>
            Name: ${body.name}, email: ${body.email}.
            <p>Body: </p>
            <p>${body.message}</p>
            `
            });
    }
    catch(err){
        console.log("error sending email: ", err);
    }
 
    console.log("datachungus", body);

    return Response.json({message: body});
}