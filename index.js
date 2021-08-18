const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const { readdirSync } = require("fs");

const client = new Client();
client.commands = new Collection();

const categories = readdirSync("./commands");
categories.forEach(commandDir => {
    const commandFiles = readdirSync(`./commands/${commandDir}`).filter(files =>
        files.endsWith(".js")
    );

    for (const file of commandFiles) {
        const command = require(`./commands/${commandDir}/${file}`);
        client.commands.set(command.help.name, command);
        console.log(`${commandDir.split(" ")[1]}: ${command.help.name} chargé`);
    }
});

const events = readdirSync("./events");
events.forEach(eventDir => {
    const eventFiles = readdirSync(`./events/${eventDir}`).filter(files =>
        files.endsWith(".js")
    );

    for (const file of eventFiles) {
        const event = require(`./events/${eventDir}/${file}`);
        const eventName = file.split(".")[0]
        client.on(eventName, event.bind(null, client))
        console.log(`Evenement chargé (${eventDir}): ${eventName}`)
    }
});

client.login(TOKEN);