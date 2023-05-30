const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserId, deleteUserById } = require('../services/CRUDservices')

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });

}
const getABC = (req, res) => {
    res.render('sample.ejs')
}
const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city


    // connection.query(
    //     `INSERT INTO Users(email, name, city) 
    //     VALUES(?, ?, ?) `,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Create user sucess')
    //     }
    // );
    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?, ?, ?) `, [email, name, city]
    );
    console.log('>>>>>', results);
    res.send('created successfully')
}

const getUdatePage = async (req, res) => {
    const userId = req.params.id

    let user = await getUserById(userId)

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

    await updateUserId(email, name, city, userId)
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async(req, res) => {
    const id = req.body.userId

    await deleteUserById(id)
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