module.exports = client => {
    client.on('ready', () => {
        client.user.setPresence({
            activity: {
                name: 'Discord-Aakairo JS',
            },
        });
        console.log(client.user.username + ' Ready');
    });
};