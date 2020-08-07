require('dotenv').config();
const reClient = require('./structures/reClient');

const client = new reClient({
    prefix: 'ai!',
    ownerID: ['271576733168173057', '369507341973979136', '695049782942498917'],
    disableMentions: "everyone",
});

require('./events/ready')(client);

client.login(process.env.TOKEN);
