import 'dotenv/config';

import { config } from './command.js';

import express from 'express';

config(process.env.APP_ID, process.env.GUILD_ID);

const app = express();

const PORT = process.env.PORT || 5000;

app.post('/interactions', (req, res) => console.log('+1 interaction'));

app.listen(PORT, () => console.log('Server listening on port', PORT));