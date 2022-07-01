const service = require('../service/taskService');

const getTask = async (_req, res) => {

    const allTask = await service.getTask();
    return res.status(200).json(allTask);
}

const postTask = async (req, res) => {
    const { task } = req.body;
    await service.postTask(task);
    return res.status(200).send()
}

const putTask = async (req, res) => {
    const { id, status } = req.body;
    const newStatus = "Em progresso"
    await service.putTask(id, status);

    return res.status(200).send()
}

const deletTask = async (req, res) => {
    const { id } = req.body;
    await service.deleteTask(id);

    return res.status(200).send()


}
 
module.exports = { getTask, postTask, putTask, deletTask  }