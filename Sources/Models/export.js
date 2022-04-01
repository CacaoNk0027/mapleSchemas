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
        guilds: require('./Menus/guilds'),
		users: require('./Menus/users'),
        /** menus de ayuda (Maple Bot) */
        info: require('./Menus/info'),
		misc: require('./Menus/misc'),
		divs: require('./Menus/divs'),
		mod: require('./Menus/mod'),
		anime: require('./Menus/anime'),
		anim: require('./Menus/anima'),
		config: require('./Menus/config'),
		action: require('./Menus/action'),
		reaction: require('./Menus/reaction'),
		nsfw: require('./Menus/nsfw'),
		rpNsfw: require('./Menus/rpNsfw'),
		stats: require('./Menus/stats'),
		music: require('./Menus/music')
    }
}