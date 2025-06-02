import express from 'express';
import { getOpenAIResponse } from '../services/openai.js';
// import { handleCalendarCommand } from '../services/calendar.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const mensaje = req.body.Body;
  const numero = req.body.From;

  console.log(`💬 Mensaje recibido de ${numero}: "${mensaje}"`);

  // const prompt = `Un usuario dice: "${mensaje}". ¿Qué quiere hacer con su calendario? Responde claramente.`;
//   const respuestaIA = await getOpenAIResponse(prompt);
// console.log()
  // const resultado = await handleCalendarCommand(respuestaIA);
//   const resultado = `🤖 Asistente IA: ${respuestaIA}`;
const resultado = 'jejje'
  res.set('Content-Type', 'text/xml');
  res.send(`<Response><Message>${resultado}</Message></Response>`);
});

// router.get('/',async(req,res)=>{
//   console.log('funciona mano ')
//   res.send('funciona mano')
// })

export default router;
