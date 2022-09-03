import { callDiscordApi } from './utils.js';

const TEST_COMMAND = {
    name: 'test',
    description: 'Basic guild command',
    type: 1,
};

const commands = [
    TEST_COMMAND
];

const install = async (appId, guildId, command) => {
    try {
        const endpoint = `applications/${appId}/guilds/${guildId}/commands`;

        const res = await callDiscordApi(endpoint, { method: 'GET' });

        const data = await res.json();

        if (data) {
            const installedNames = data.map((c) => c['name']);

            if (!installedNames.includes(command['name'])) {
                console.log(`Installing command "${command['name']}"`);
                try {
                    await callDiscordApi(endpoint, { method: 'POST', body: command });
                } catch (err) {
                    console.error(err);
                }
            } else {
                console.log(`"${command['name']}" command already installed`);
            }
        }
    } catch (err) {
        console.error(err);
    }
}

const config = (appId, guildId) => commands.forEach(command => install(appId, guildId, command))

export {
    config
}