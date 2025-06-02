import cron from 'node-cron';
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const from = process.env.NUMBER_TWILIO;
const to = process.env.NUMBER_ME; // número

export function programarMensaje({ cronTime, body }) {
  cron.schedule(
    cronTime,
    async () => {
      try {
        await client.messages.create({
          from,
          to,
          body,
        });
        console.log(` Mensaje "${body}" enviado`);
      } catch (err) {
        console.error(` Error en "${body}":`, err);
      }
    },
    {
      timezone: 'America/Bogota',
    }
  );
}
