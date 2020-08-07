const { AkairoClient, ListenerHandler, CommandHandler } = require('discord-akairo');
const { join } = require("path");

module.exports = class reClient extends AkairoClient {
    constructor(opt) {
        super({
            ownerID: ['271576733168173057', '369507341973979136', '695049782942498917'],
        }, opt);
    }

    _init() {
        this.listener = new ListenerHandler(this, {
            directory: join(__dirname, "..", "events")
        });
        this.cmds = new CommandHandler(this, {
            directory: join(__dirname, "..", "commands"),
            prefix: "ai!",
            handleEdits: true,
            commandUtil: true,
            ignoreCooldown: this.ownerID
        });

        this.cmds.useListenerHandler(this.listener);

        this.cmds.loadAll();
        this.listener.loadAll();
        this.login(process.env.TOKEN);
    }
};
