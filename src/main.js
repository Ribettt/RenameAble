require('dotenv').config();
const reClient = require('./structures/reClient');

const client = new reClient({
    disableMentions: "everyone",
});

require('./events/ready')(client);

client.login(process.env.TOKEN);