const mongoose = require("mongoose");
const config = require('./config')

const DBURL = config.db.url

mongoose.set('strictQuery', true)
mongoose.connect(DBURL)
.then(_=>console.log(`Connected....`))
.catch(err=>{
    console.log(err)
    process.exit(1)
})

