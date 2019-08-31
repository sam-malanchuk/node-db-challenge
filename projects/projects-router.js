const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    })
});

router.get('/resources', (req, res) => {
  Projects.listResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources list' });
    })
});

module.exports = router;