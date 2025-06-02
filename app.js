// getGoogleToken.js
import { google } from 'googleapis';
import readline from 'readline';
import { configDotenv } from 'dotenv';
configDotenv()

// Tus credenciales (colócalas directo aquí o desde el .env)
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET =   process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Scopes (permisos que pedirás)
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

console.log('🌐 Abre esta URL en tu navegador:\n');
console.log('id,,: ', CLIENT_ID)
console.log(authUrl);

// Leer el code que Google devolverá en el navegador
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\n📥 Pega el "code" de Google aquí: ', async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\n✅ REFRESH TOKEN:');
    console.log(tokens.refresh_token);
  } catch (err) {
    console.error('❌ Error obteniendo token:', err);
  }
  rl.close();
});
