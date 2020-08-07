require('dotenv').config();
const reClient = require('./structures/reClient');

const client = new reClient({
    disableMentions: 'everyone',
});

client._init();