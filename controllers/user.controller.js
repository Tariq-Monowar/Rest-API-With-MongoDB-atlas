const {v4: uuidv4} = require('uuid')
const User = require('../models/user.models')

//Get User Route controller
const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Get User by _id Route controller
const getOneUsers = async(req,res)=>{
    try {
        const user = await User.findById({_id: req.params.id}) //findOne
        res.status(200).json(user) 
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Create User Route controller
const createUsers = async(req,res)=>{
    try {
        const newUser = new User({
            id: uuidv4(),
            userName: req.body.userName,
            email: req.body.email,
            phone: Number(req.body.phone),
            worke: req.body.worke,
            Password: req.body.Password,
            cPaddword: req.body.cPaddword,
        })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Update User Route controller
const updateUsers = async(req,res)=>{
    try {
        const user = await User.findById({_id: req.params.id})
        user.userName= req.body.userName,
        user.email= req.body.email,
        user.phone= Number(req.body.phone),
        user.worke= req.body.worke,
        user.Password= req.body.Password,
        user.cPaddword= req.body.cPaddword,
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Delete User Route controller
const deleteUser = async(req,res)=>{
    try {
        await User.findByIdAndDelete({_id: req.params.id}) //findOne
        res.status(200).json({message: "message user is Deleted"}) 
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {getAllUsers, getOneUsers, createUsers, updateUsers, deleteUser}

