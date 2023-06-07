const { createProject, getProject, deleteProject, updateProject } = require('../services/productServices');

module.exports = {
    postCreateProject: async (req, res) => {
        // console.log('>>>>>>check req.body' , req.body);
        let result = await createProject(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    getAllProject: async (req, res) => {
        // console.log('>>>>>>check req.body' , req.body);
        let result = await getProject(req.query)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteAProject: async (req, res) => {
        let id = req.body.id
        let result = await deleteProject(id)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    updateAProject: async (req, res) => {
        let result = await updateProject(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}