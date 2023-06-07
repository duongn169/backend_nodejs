const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserId, deleteUserById } = require('../services/CRUDservices')
const User = require("../models/user")

const getHomePage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results });

}
const getABC = (req, res) => {
    res.render('sample.ejs')
}
const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city

    await User.create({
        email,
        name,
        city

    })
    res.redirect('/');
}

const getUdatePage = async (req, res) => {
    const userId = req.params.id

    //let user = await getUserById(userId)
    let user = await User.findById(userId).exec();

    res.render('edit.ejs', { userEdit: user });
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    let userId = req.body.userId

    //await updateUserId(email, name, city, userId)
    await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await User.findById(userId).exec();

    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId

    //await deleteUserById(id)
    await User.deleteOne({
        _id: id
    })
    res.redirect('/')
}
module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
    getUdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}