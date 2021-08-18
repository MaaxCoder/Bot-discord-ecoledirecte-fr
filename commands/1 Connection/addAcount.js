    const { PREFIX } = require("../../config")
const { errorSyntax } = require("../../fonc")

module.exports.run = (client, message, args) => {
    // ajouter des info au json
    
    console.log(client)



    
}

module.exports.help = {
    name: 'addAccount',
    description: 'Permet d\'ajouter son compte Ecoledirecte',
    folder: 'Connection',
    syntax: '<username> <password>'
}