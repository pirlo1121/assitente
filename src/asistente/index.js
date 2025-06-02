import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import webhookRouter from './../routes/webhook.js';
import { getLunch, getUp, goSleep, OnePerMonth, pruebaa, train } from '../services/dailyMessage.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/webhook', webhookRouter);

// iniciarMensajeDiario();
getUp();
goSleep()
train()
getLunch()
OnePerMonth()
// example()
pruebaa()

app.listen(PORT, () => {
  console.log(` Servidor encendido en el puerto ${PORT}`);
});
