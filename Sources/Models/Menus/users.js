'use strict';
const discord = require('discord.js')
module.exports = {
    /**
     * @param {discord.GuildMember} member
     */
    user: function (member) {
        return `🆔 **ID |** ${member.user.id}\n🖋️ **Nombre |** ${member.user.username}\n✏️ **Nick |** ${member.nickname == null ? "Sin Apodo": `${member.nickname}`}\n#️⃣ **Tag |** #${member.user.discriminator}`
    },
    /**
     * @param {discord.GuildMember} member 
     */
    dates: function (member) {
        function formatDate (template, date) {
            var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
            date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
            return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
                return template.split(specs[i]).join(item)
            }, template)
        }
        return `🛎️ **A ${member.guild.name}**\n${formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt)}\n💬 **A Discord**\n${formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt)}`
    }, 
    /**
     * @param {discord.GuildMember} member 
     */
    general: async function (member) {
        function formatDate (template, date) {
            var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
            date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
            return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
                return template.split(specs[i]).join(item)
            }, template)
        }
        let badges, boost_guild, img, guildAvatar, banner
        let badges_object = {
            BUGHUNTER_LEVEL_1: '<:Dis_bg_bugHunter_v1:888238587529793596>',
            BUGHUNTER_LEVEL_2: '<:Dis_bg_bugHunter_v2:888240135525785631>',
            DISCORD_CERTIFIED_MODERATOR: '<:Dis_bg_verifiedMod:888236515526844448>',
            DISCORD_EMPLOYEE: '<:Dis_bg_employee:888238358118154270>',
            EARLY_SUPPORTER: '<:Dis_bg_earlySupporter:888238773635280956>',
            EARLY_VERIFIED_BOT_DEVELOPER: '<:Dis_bg_verifiedBotDeveloper:888237981830357042>',
            HOUSE_BALANCE: '<:Dis_bg_hypeBalance:888237504162058261>',
            HOUSE_BRAVERY: '<:Dis_bg_hypeBravery:888237733712113684>',
            HOUSE_BRILLIANCE: '<:Dis_bg_hypeBrilliance:888237640745353266>',
            HYPESQUAD_EVENTS: '<:Dis_bg_hypesquad:888237819003273299>',
            PARTNERED_SERVER_OWNER: '<:Dis_bg_partnerSrvOwner:888238884469735494>',
            VERIFIED_BOT: '<:Dis_bg_verifiedBot:956799811020025856>'
        }
        badges = member.user.flags.toArray().length >= 1 ? member.user.flags.toArray().map(bg => badges_object[bg]).join(' ') : "Sin Insignias"
        boost_guild = member.premiumSince == null ? "No esta boosteando este servidor": `Boosteando ${member.guild.name} desde\n${formatDate(`DD/MM/YYYY, a las HH:mm:ss`, member.premiumSinceTimestamp)}`
        img = member.user.avatar == null ? "Sin avatar": `[Avatar URL](${member.user.avatarURL({dynamic: true, size: 4096})})`
        guildAvatar = member.avatar == null ? "Sin avatar de servidor": `[GuildAvatar URL](${member.avatarURL({dynamic: true, size: 4096})})`
        banner = (await member.user.fetch()).banner == (null || undefined) ? "sin banner - banner no detectado":  `[Banner URL](${(await member.user.fetch()).bannerURL({ dynamic: true, size: 4096 })})`
        return `- **Insignias**\n${badges}\n<:Dis_boostLv3:888234376226295878> **Boost |** ${boost_guild}\n🌆 **Avatar |** ${img}\n🎩 **Avatar de Servidor |** ${guildAvatar}\n🖼 **Banner |** ${banner}`
    }
}