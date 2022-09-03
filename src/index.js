import 'dotenv/config';

import {
    InteractionType,
    InteractionResponseType,
} from 'discord-interactions';

import express from 'express';

import { config } from './command.js';

import { verifyDiscord } from './utils.js';

config(process.env.APP_ID, process.env.GUILD_ID);

const app = express();

app.use(express.json({ verify: verifyDiscord(process.env.PUBLIC_KEY) }))

const PORT = process.env.PORT || 5000;

app.post('/interactions', function (req, res) {
    const { type, data } = req.body;

    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
    }

    if (type === InteractionType.APPLICATION_COMMAND) {
        const { name } = data;
        if (name === 'play') {
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: '\'Sup? 🤖'
                },
            });
        }
    }
});

app.listen(PORT, () => console.log('Server listening on port', PORT));
