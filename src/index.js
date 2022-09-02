const express = require('express');

const app = express();

const PORT = 5000;

app.post('/interactions', (req, res) => {
    console.log('got interaction');
})

app.listen(PORT, () => {
    console.log('Server started on port', PORT);
});