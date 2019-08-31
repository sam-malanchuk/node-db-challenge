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
      console.log(id);
      return db('resources').where({id}).first()
    })
}

function listResources() {

}

function addProject() {

}

function listProjects() {

}

function addTask() {

}

function listTasks() {

}