/**
 * @param {import('discord.js').Client} client el cliente de discord
 * @param {string|object} presences puede ser un string o un array de presencias
 * @param {import('discord.js').ActivityType} type el tipo de actividad del bot
 * @param {import('discord.js').PresenceStatusData} status el status del bot
 * @param {number} interval cada 1 es un minuto
 */
module.exports = (client, presences, type, status, interval) => {
    if(!client || client == null || client ) throw new Error('No se ha colocado al cliente de discord')
    if(!presences) throw new Error('debes poner un array de presencias o un string')
    switch(typeof(presences)) {
        case "string": 
            client.user.setPresence({
                activities: [{
                    name: presences,
                    type: type,
                }], status: status
            })
            break;
        case "object":
            let number;
            if(typeof(interval) !== "number" || interval == null || interval == undefined) number == (60*1)*1000;
            else number == (60*interval)*1000
            /**
             * @param {Array} array 
             * @returns presencia random
             */
            const random = (array) => array[Math.floor(Math.random()*array.length)]
            setInterval(() => {
                client.user.setPresence({
                    activities: [{
                        name: random(presences),
                        type: type
                    }], status: status
                })
            }, number)
            break
        default: throw new Error("debes de poner presencias! no se detecta ninguna");
    }
}