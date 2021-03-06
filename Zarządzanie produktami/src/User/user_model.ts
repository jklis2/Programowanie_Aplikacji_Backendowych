const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: {type:String, required: true},
    password: {type:String, required: true, minLenght:7}
})


const User = mongoose.model('user', userSchema)

module.exports = User