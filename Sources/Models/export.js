module.exports = {
    schemas: {
        Blacklist: require('./Schemas/Blacklist.js'),
        SetChannels: require('./Schemas/SetChannels.js'),
        Farewell: require('./Schemas/Farewell.js'),
        Mute: require('./Schemas/Mute.js'),
        SetPrefix: require('./Schemas/SetPrefix.js'),
        Snipe: require('./Schemas/Snipe.js'),
        Warns: require('./Schemas/Warns.js'),
        Welcome: require('./Schemas/Welcome.js')
    },
    utils: {
        presence: require(`./Utils/presence.js`),
        percentageBar: require('./Utils/percentageBar.js'),
        error: require('./Utils/error'),
        welFarOptions: require('./Utils/welFarOptions.js'),
        prefix: require('./Utils/prefix.js'),
        statusError: require('./Utils/statusError.js')
    },
    menus: {
        guilds: require('./menus/guilds'),
		users: require('./menus/users'),
        /** menus de ayuda (Maple Bot) */
        info: require('./menus/info'),
		misc: require('./menus/misc'),
		divs: require('./menus/divs'),
		mod: require('./menus/mod'),
		anime: require('./menus/anime'),
		anim: require('./menus/anima'),
		config: require('./menus/config'),
		action: require('./menus/action'),
		reaction: require('./menus/reaction'),
		nsfw: require('./menus/nsfw'),
		rpNsfw: require('./menus/rpNsfw'),
		stats: require('./menus/stats'),
		music: require('./menus/music')
    }
}