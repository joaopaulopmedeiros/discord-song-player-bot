import 'dotenv/config';

import express from 'express';

import { config } from './command.js';

import { verifyDiscordClient } from './utils.js';

config(process.env.APP_ID, process.env.GUILD_ID);

const app = express();

app.use(express.json({ verify: verifyDiscordClient(process.env.PUBLIC_KEY) }));

const PORT = process.env.PORT || 5000;

app.post('/interactions', (req, res) => console.log('+1 interaction'));

app.listen(PORT, () => console.log('Server listening on port', PORT));