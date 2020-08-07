const { AkairoClient } = require('discord-akairo');

module.exports = class reClient extends AkairoClient {
    constructor(opt) {
        super({
            ownerID: ['271576733168173057', '369507341973979136', '695049782942498917']
        }, opt);
    }
};