const express = require('express');
const path = require('path');
const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json())


//app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')));

app.listen(PORT, () => console.log('listening on port 3000'));