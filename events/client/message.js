const { PREFIX } = require("../../config");

module.exports = (client, message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(" ");
    const commandName = args.shift();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    command.run(client, message, args);
}