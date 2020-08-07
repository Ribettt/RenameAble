const { Listener } = require("discord-akairo");

module.exports = class Ready extends Listener {
    constructor() {
        super('ready', {
            event: "ready",
            emitter: "client"
        });
    }

    exec() {
        console.log(`Login ${this.client.user.tag}`);
    }
}