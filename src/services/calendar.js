// services/calendarService.js
import { google } from 'googleapis';
import dayjs from 'dayjs';

const auth = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);
auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const calendar = google.calendar({ version: 'v3', auth });

export async function getEventosDeHoy() {
  const inicio = dayjs().startOf('day').toISOString();
  const fin = dayjs().endOf('day').toISOString();

  const res = await calendar.events.list({
    calendarId: 'primary',
    timeMin: inicio,
    timeMax: fin,
    singleEvents: true,
    orderBy: 'startTime',
  });

  const eventos = res.data.items || [];

  if (eventos.length === 0) {
    return '🎉 No tienes eventos programados para hoy.';
  }

  return (
    '📅 Hoy tienes:\n' +
    eventos
      .map((evento) => {
        const hora = dayjs(evento.start.dateTime).format('HH:mm');
        return `- ${evento.summary} a las ${hora}`;
      })
      .join('\n')
  );
}



// Aquí iría el manejo con Google Calendar usando OAuth2
export async function handleCalendarCommand(texto) {
  return `⏳ Aquí se procesaría el comando del calendario: "${texto}"`;
}
