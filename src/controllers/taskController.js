const { createTask, getTask, deleteTask, updateTask } = require('../services/taskServices');

module.exports = {
    postCreateTask: async (req, res) => {
        let result = await createTask(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    getAllTask: async (req, res) => {
        
        let result = await getTask(req.query)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteATask: async (req, res) => {
        let id = req.body.id
        let result = await deleteTask(id)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    updateATask: async (req, res) => {
        let result = await updateTask(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}