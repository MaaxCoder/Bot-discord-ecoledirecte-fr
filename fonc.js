const { PREFIX } = require("./config")

module.exports =  {
    errorSyntax: (command, message) => {
        message.channel.send(`\`\`\`Syntaxe incorrecte : ${PREFIX + command.help.name} ${command.help.syntax}\`\`\``);
    }
}