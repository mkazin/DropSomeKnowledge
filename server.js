const express = require('express')
const passport = require('passport')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const dropRoutes = require('./routes/drops')

require('dotenv').config({path: './config/.env'})
require("./config/passport")(passport);

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize());
app.use(passport.session());

app.use('/', homeRoutes)
app.use('/drops', dropRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})    