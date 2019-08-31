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

function addProject() {

}

function listProjects() {

}

function addTask() {

}

function listTasks() {

}