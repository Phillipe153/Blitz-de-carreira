const { task } = require('../models');

const getTask = async () => {
    const allTask = await task.findAll();

    return allTask;
}

const postTask = async (newTask) => {
   await task.create({task: newTask, status: "Pendente"});    
}

const putTask = async (id, newStatus) => {
    const taskById= await task.findOne({ where: {id}})
    taskById.update({status: newStatus})

}

const deleteTask = async (id) => {
    const taskById = await task.findOne({ where: {id}})
    taskById.destroy();
}

module.exports = { getTask, postTask, putTask, deleteTask };