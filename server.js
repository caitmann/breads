const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about breads!')
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)