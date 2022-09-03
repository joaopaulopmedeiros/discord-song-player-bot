const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Listen to your favorite songs!'),
    async execute(interaction) {
        return interaction.reply('What\'s up?');
    },
};