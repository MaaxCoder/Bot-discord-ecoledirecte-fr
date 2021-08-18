const { errorSyntax } = require("../../fonc")
const { PREFIX } = require("../../config")

module.exports.run = (client, message, args) => {
    if (args.length == 1) {
        let commandRequest = args[0]
        if (client.commands.has(commandRequest)) {
            const command = client.commands.get(commandRequest.toLowerCase()).run.toString()
            
            message.channel.send(`Commande Valide : voici le code source de la commande \`${ PREFIX + commandRequest}\``)
            message.channel.send(`\`\`\`js\n ${command}\`\`\``);
        } else {
            message.channel.send (`\`Erreur : commande inexistante.\` Pour avoir une liste des commandes, taper \`${PREFIX}help\``)
        }

    } else {
        errorSyntax(this, message);
    }
}

module.exports.help = {
    name: 'viewcode',
    description: 'Pour les developpeurs, permet de voir le code derriere la commande',
    folder: 'Developpeurs',
    syntax: "<command>"
}