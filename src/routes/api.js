const express = require('express')

const routerAPI = express.Router()

const  {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi} = require('../controllers/apiController')

const {postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomers, DeleteACustomer, DeleteArrayCustomer} = require('../controllers/customerController')

const {postCreateProject, getAllProject, deleteAProject, updateAProject} = require('../controllers/projectController')

const {postCreateTask,  getAllTask, deleteATask, updateATask} = require('../controllers/taskController')

routerAPI.get('/users', getUsersAPI)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', putUpdateUserAPI)

routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFileApi)

routerAPI.post('/customers', postCreateCustomer)

routerAPI.post('/customers-many', postCreateArrayCustomer)

routerAPI.get('/customers', getAllCustomers)

routerAPI.put('/customers', putUpdateCustomers)

routerAPI.delete('/customers', DeleteACustomer)

routerAPI.delete('/customers-many', DeleteArrayCustomer)

routerAPI.post('/projects', postCreateProject)
routerAPI.get('/projects', getAllProject)
routerAPI.delete('/projects', deleteAProject)
routerAPI.put('/projects', updateAProject)

routerAPI.post('/tasks', postCreateTask)
routerAPI.get('/tasks', getAllTask)
routerAPI.delete('/tasks', deleteATask)
routerAPI.put('/tasks', updateATask)





routerAPI.get('/info', (req, res) => {
    console.log('check query', req.query)
    return res.status(200).json({
        data: req.query
    })
})

routerAPI.get('/info/:name/:adress', (req, res) => {
    console.log('check req.params', req.params)
    return res.status(200).json({
        data: req.params
    })
})


module.exports = routerAPI;