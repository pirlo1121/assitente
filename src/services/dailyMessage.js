import { programarMensaje } from '../helpers/message.js';
import { getEventosDeHoy } from './calendar.js';

export function iniciarMensajeDiario() {

}

export function getUp(){
       programarMensaje({
        cronTime: '1 08 * * *',
        body: 'Get up',
       })
}

export async function pruebaa(){
       let mensaje = ''
       mensaje = await getEventosDeHoy()
       programarMensaje({
        cronTime: '1 08 * * *',
        body: mensaje,
       })
}

export function getLunch(){
       programarMensaje({
        cronTime: '0 11 * * *',
        body: 'Make lunch',
       })
}

export function goSleep(){
       programarMensaje({
        cronTime: '45 11 * * *',
        body: 'Go to bed',
       })
}

export function train(){
       programarMensaje({
        cronTime: '0 14 * * *',
        body: 'Exercise',
       })
}

export function OnePerMonth(){
       programarMensaje({
        cronTime: '0 13 4 * *',
        body: `
            - Mandar hoja de cobro
            - Pagar cuota
            - Pagar arriendo
        `,
       })
}



// export function getTasks(){
//        try {
//               const mensaje = getEventosDeHoy()
//                      programarMensaje({
//                      cronTime: '15 13 * * *',
//                      body: mensaje,
//        })
              
//        } catch (err) {
//               console.error('Error al enviar eventos:', err)
//        }
// }