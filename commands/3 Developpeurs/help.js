const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");
const { readdirSync } = require("fs");
const categoryList = readdirSync("./commands");

module.exports.run = (client, message, args) => {
  for (i = 0; i < categoryList.length; i++) {
    categoryList[i] = categoryList[i].substr(2);
  }

  for (category of categoryList) {
    const embed2 = new MessageEmbed()
      .setColor("#999999")
      .setTitle(`Catgéorie: ${category}`);

    for (commandHelp of client.commands
      .filter((command) => command.help.folder == category)
      .map((command) => command.help)) {
      if (commandHelp.except != true) {
        embed2.addField(
          `\`${PREFIX + commandHelp.name}\``,
          `${commandHelp.description} \n 
          \`\`\`Syntaxe : ${PREFIX + commandHelp.name} ${
            commandHelp.syntax
          }\`\`\``
        );
      }
    }

    message.channel.send(embed2);
  }
};

module.exports.help = {
  name: "help",
  except: true,
  description: "Menu Help",
  folder: "Developpeurs",
  syntax: "",
};
