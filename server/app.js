const express = require('express')
const mongoose = require('mongoose')
const { MONGOURL } = require('./keys')
const app = express()
const PORT = 5000

mongoose.connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
    console.log('connected to database succesfuly')
})

mongoose.connection.on('error', (err) => {
    console.log('error connectiong to database', err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})