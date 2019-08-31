const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./projects/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectsRouter);

server.get('/', (req, res) => {
    res.status(200).json("Please use the following endpoint format: /api/projects/.");
});

module.exports = server;
