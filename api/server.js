const express = require('express');
const cors= require('cors');
const server = express();
server.use(express.json());
server.use(cors());

const router = require('./router')

server.use('/api', router);

server.get('/', (req, res) => {
    res.send(`<h1>Node API challenge 4: dynamic PORT using dotenv`)
})

module.exports = server;