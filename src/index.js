require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

const token = process.env.DISCORD_TOKEN;
const guildId = process.env.GUILD_ID;
const appId = process.env.APP_ID;
const rest = new REST({ version: '10' }).setToken(token);
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.name, command);
}

rest.put(Routes.applicationGuildCommands(appId, guildId), { body: client.commands })
    .then(() => console.log('Successfully registered all application commands'))
    .catch(console.error);

client.once('ready', () => console.log('Ready!'));

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error on attempt to execute command', ephemeral: true });
    }
});

client.login(token);