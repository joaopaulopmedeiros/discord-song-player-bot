const { i18n } = require('../utils/i18n.js');

module.exports = {
    name: "play",
    cooldown: 3,
    aliases: ["p"],
    description: i18n.__("play.description"),
    permissions: ["CONNECT", "SPEAK", "ADD_REACTIONS", "MANAGE_MESSAGES"],
    async execute(interaction) {
        return interaction.reply('What\'s up?');
    },
};