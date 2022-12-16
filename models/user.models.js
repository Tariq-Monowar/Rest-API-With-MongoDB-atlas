const mongoose = require("mongoose");

const userSchma = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    worke: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    cPaddword: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchma)
