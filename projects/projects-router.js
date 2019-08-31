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

router.post('/', (req, res) => {
  const projectData = req.body;

  // if data doesn't specify Completed, default to false
  if(projectData['completed'] === undefined) {
    projectData['completed'] = false;
  }

  Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new project' });
    })
});

router.get('/', (req, res) => {
  Projects.listProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects list' });
    })
});

module.exports = router;