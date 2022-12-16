const express = require('express')
const router = express.Router()

const { 
    getAllUsers, 
    getOneUsers, 
    createUsers, 
    updateUsers,
    deleteUser 
} = require('../controllers/user.controller')

//All Route on the Server
router.get("/", getAllUsers)
router.get("/:id", getOneUsers)
router.post("/", createUsers)
router.patch('/:id', updateUsers)
router.delete('/:id', deleteUser)

module.exports = router