const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const cors = require('cors')

const app = express()
const port = 3000

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(bodyParser.json())
    .use(cors())

sequelize.initDb()


require('./src/routes/findAllBooks')(app)
require('./src/routes/findBookByPk')(app)
require('./src/routes/createBook')(app)
require('./src/routes/updateBook')(app)
require('./src/routes/deleteBook')(app)


app.use (({res}) => {
    const message = 'Impossible de trouver la ressource demandée ! '
    res.status(404).json({message})
})

app.listen(port, ()=> console.log(`Notre application Node est démarrée sur : http://localhost:${port}'`))

