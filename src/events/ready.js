const { Listener } = require('discord-akairo');

module.exports = class Ready extends Listener {
    constructor() {
        super('ready', {
            event: 'ready',
            emitter: 'client',
        });
    }

    exec() {
        this.client.user.setPresence({
            activity: {
                name: 'Discord.js-Akairo',
            },
        });
        console.log(`Login ${this.client.user.tag}`);
    }
};