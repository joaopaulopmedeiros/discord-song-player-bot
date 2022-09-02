require('dotenv').config();

const commands = require('./command');

commands.configure();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.post('/interactions', (req, res) => console.log('+1 interaction'));

app.listen(PORT, () => console.log('Server listening on port', PORT));