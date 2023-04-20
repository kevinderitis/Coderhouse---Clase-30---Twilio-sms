import twilio from 'twilio';
import * as dotenv from 'dotenv'
dotenv.config()

const accountSID = process.env.ACCOUNT_SID_TWILIO;
const authToken = process.env.AUTH_TOKEN_TWILIO;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSID, authToken);

export const sendSMS = async (to,body) => {
    const response = await client.messages.create({ to, from: twilioPhoneNumber, body})
    console.log(response)
    return response;
}