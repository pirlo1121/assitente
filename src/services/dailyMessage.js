import { programarMensaje } from '../helpers/message';

export function iniciarMensajeDiario() {

}

export function getUp(){
       programarMensaje({
        cronTime: '1 8 * * *',
        body: 'Get up',
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
        cronTime: '45 23 * * *',
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
        cronTime: '0 8 4 * *',
        body: `
            - Mandar hoja de cobro
            - Pagar cuota
            - Pagar arriendo
        `,
       })
}

