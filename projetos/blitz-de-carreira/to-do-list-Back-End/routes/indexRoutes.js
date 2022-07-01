const router = require('express').Router();

const controller = require('../controller/taskController')

router.get('/listAllTask' , controller.getTask);
router.post('/postTask' , controller.postTask);
router.put('/updateTask',controller.putTask)
router.delete('/deleteTask', controller.deletTask)


module.exports = router;