const express = require('express')
const methodOverride = require('method-override')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about breads!')
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)