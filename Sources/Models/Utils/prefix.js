/**
 * @param {import('discord.js').Client} client cliente de discord
 * @param {import('discord.js').Guild} guild servidor del que vamos a obtener prefix
 */
module.exports = async (client, guild) => {
    let SetPrefix = require('../Schemas/Prefix.js')
    if(!client) throw new Error('debes poner el cliente de discord')
    if(!guild) throw new Error('debes poner un servidor!')
    try {
        let prefixDB = await SetPrefix.findOne({ guildID: guild.id }).exec().then(c => c.prefix)
        return [`<@${client.user.id}>`, `<@!${client.user.id}>`, prefixDB]
    } catch (error) {
        return [`<@${client.user.id}>`, `<@!${client.user.id}>`, "m!"]
    }
}