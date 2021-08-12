const express = require('express');
const path = require('path');
const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json())

app.get('/signup', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));
app.get('/board', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

app.use((req, res) =>res.sendStatus(404))

app.listen(PORT, () => console.log('listening on port:', PORT));