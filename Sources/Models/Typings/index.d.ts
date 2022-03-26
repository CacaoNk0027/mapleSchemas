import { Model } from "mongoose";
import {Message, ActivityType, Client, Guild, GuildMember } from "discord.js"

export let schemas = {
    Blacklist: Model,
    Farewell: Model,
    Mute: Model,
    SetChannels: Model,
    SetPrefix: Model,
    Snipe: Model,
    Warns: Model,
    Welcome: Model
}

export let menus = {
    guilds: {
        guilds: async function (client: Client, guild: Guild): Promise<string> {},
        general: function (guild: Guild, nivel: string): string {},
        datos: function (guild: Guild): string {},
        comunidad: function (guild: Guild, member: GuildMember): string {}
    },
    users: {
        user: function (member: GuildMember): string {},
        dates: function (member: GuildMember): string {},
        general: async function (member: GuildMember): Promise<string> {}
    },
    info: function (prefix: string): string {},
    misc: function (prefix: string): string {},
    divs: function (prefix: string): string {},
    mod: function (prefix: string): string {},
    anime: function (prefix: string): string {},
    anim: function (prefix: string): string {},
    config: function (prefix: string): string {},
    action: function (prefix: string): string {},
    reaction: function (prefix: string): string {},
    music: function (prefix: string): string {},
    nsfw: function (prefix: string): string {},
    rpNsfw: function (prefix: string): string {},
    stats: function (obj: myJson): string {}
}

export const utils = {
    presence: function (client: Client, presences: string[]|string, type: ActivityType, status: PresenceStatusData, interval: number): void {},
    percentageBar: function (used: number, free: number, length: number): string {},
    error: async function (message: Message, error: string): Promise<Message> {},
    welFarOptions: function (): string {},
    prefix: async function (client: Client, guild: Guild): Promise<string[]> {},
    statusError: function (type: TypeStatusError, message: string): string {}
}

export type myJson = {
    servers?: number,
    interactions?: number,
    commands?: number,
    users?: number,
    votos?: number,
    shards?: number
};

export type TypeStatusError = "error"|"warn"|"success"|"rolplay"|"rolplayMe"|"rolplayDanger";