const express = require('express')
const router = express.Router()
const { getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
    getUdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser } = require('../controllers/homeController')





router.get('/', getHomePage)

router.get('/abc', getABC)
router.get('/create', getCreatePage)
router.get('/update/:id', getUdatePage)


router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)




module.exports = router;