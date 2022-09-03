import 'dotenv/config';

import {
    InteractionType,
    InteractionResponseType,
} from 'discord-interactions';

import express from 'express';

import { config } from './command.js';

config(process.env.APP_ID, process.env.GUILD_ID);

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    return res.json({ message: 'hello world' });
})

app.post('/interactions', function (req, res) {
    const { type } = req.body;

    console.log(type);

    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
    }

    if (type === InteractionType.APPLICATION_COMMAND) {
        const { name } = data;
        if (name === 'test') {
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: 'hello world!'
                },
            });
        }
    }
});

app.listen(PORT, () => console.log('Server listening on port', PORT));
