import 'dotenv/config';
import { Client, GatewayIntentBits, SlashCommandBuilder, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.APP_ID;
const guildId = process.env.GUILD_ID;
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.DirectMessages] });

const commands = [
    new SlashCommandBuilder().setName('play').setDescription('Play your favorite songs!'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then((data) => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error);

client.on('ready', () => console.log(`Bot ${client.user.tag} is ready`));

client.on('messageCreate', async (message) => {
    console.log("DEBUG");
    console.log('content: ' + message.content);
});

client.login(token);