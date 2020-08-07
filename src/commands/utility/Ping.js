const { Command } = require('discord-akairo');
const { stripIndent } = require('common-tags');
module.exports = class Ping extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'pong'],
            description: 'ping pong',
            category: 'utility',
        });
    }

    async exec(msg) {
        const m = await msg.util.send('Pinging...');
        const ping = Math.round(m.createdTimestamp - msg.createdTimestamp);

        return msg.util.send({ embed: {
            description: stripIndent`
            🏓 Pong: ${ping}ms
            
            🔥 API: ${this.client.ws.ping}ms
            `,
            color: 'RANDOM',
        } });
    }
};