require('dotenv').config()

const dev = {
    app: { 
        port : process.env.port || 4040
    },
    db: {
        url : process.env.DB_URL || "mongodb://127.0.0.1:27017/userDBMSOK"
    }
}

module.exports = dev