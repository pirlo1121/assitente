import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import webhookRouter from './../routes/webhook.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/webhook', webhookRouter);

app.listen(PORT, () => {
  console.log(`🔥 Servidor encendido en el puerto ${PORT}`);
});
