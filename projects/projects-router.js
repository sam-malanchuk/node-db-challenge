const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json("Got em!");
});

module.exports = router;