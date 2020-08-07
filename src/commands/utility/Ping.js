const { Command } = require("discord-akairo");

module.exports = class Ping extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'pong'],
            description: "ping pong",
            category: "utility"
        });
    }

    exec(msg) {
        return msg.util.send(`:ping_pong: Pong ${this.client.ws.ping}`);
    }
}