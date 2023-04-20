import express from 'express';
import { sendSMS } from './sms.js';
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json())

app.post('/sendSMS', (req, res) => {
    const { to, body } = req.body;
    let respuesta = sendSMS(to,body)
    res.send(respuesta)
})

const PORT = process.env.PORT;
const server = app.listen(PORT, () => console.log(`Server running on port: ${server.address().port}`))
server.on('error', error => console.log(error))