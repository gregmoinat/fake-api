const express = require('express');
const cors = require('cors')
const nocache = require('nocache');
const { v4: uuidv4 } = require('uuid');

const server = express();
const port = 8000;
server.use(cors());
server.use(nocache());
server.listen(port);

module.exports = server;