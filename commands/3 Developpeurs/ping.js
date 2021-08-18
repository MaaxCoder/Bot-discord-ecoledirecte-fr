module.exports.run = (client, message, args) => {
    message.channel.send(`Pong <@!${message.author.id}>`);
}

module.exports.help = {
    name: 'ping',
    description: 'Renvoie Pong!',
    folder: 'Developpeurs',
    syntax: ''
}