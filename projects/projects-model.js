const db = require('../data/db-config.js');

module.exports = {
  addResource,
  listResources,
  addProject,
  listProjects,
  addTask,
  listTasks
}

function addResource(resourceData) {
  return db('resources').insert(resourceData)
    .then(ids => {
      const id = ids[0];
      return db('resources').where({id}).first()
    })
}

function listResources() {
  return db('resources');
}

function addProject(projectData) {
  return db('projects').insert(projectData)
    .then(ids => {
      const id = ids[0];
      return db('projects').where({id}).first()
    })
}

function listProjects() {
  return db('projects');
}

function addTask(taskData) {
  return db('tasks').insert(taskData)
    .then(ids => {
      const id = ids[0];
      return db('tasks').where({id}).first()
    })
}

function listTasks() {
  return db('tasks');
}