import { dbmain } from "./DataBase/DbConnection"

const express = require('express')  
const cookieParser = require('cookie-parser')
const user = require('./User/user_controller')


dbmain();
const app = express()

app.use(express.json())

app.use(cookieParser())

app.use('/user', user)

app.listen(5000)