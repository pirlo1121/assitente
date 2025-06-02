import { programarMensaje } from '../helpers/message.js';

export function iniciarMensajeDiario() {

}

export function getUp(){
       programarMensaje({
        cronTime: '1 13 * * *',
        body: 'Get up',
       })
}

export function example(){
       programarMensaje({
        cronTime: '* * * * *',
        body: 'probando la app',
       })
}

export function getLunch(){
       programarMensaje({
        cronTime: '0 16 * * *',
        body: 'Make lunch',
       })
}

export function goSleep(){
       programarMensaje({
        cronTime: '45 4 * * *',
        body: 'Go to bed',
       })
}

export function train(){
       programarMensaje({
        cronTime: '0 18 * * *',
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

