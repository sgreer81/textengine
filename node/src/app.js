const express = require('express')
const routes = require('./api/routes')
const bodyParser = require('body-parser')

const app = express()

app.listen('8080', '0.0.0.0')

app.use(bodyParser.json())
app.use(routes)

app.get('/', (req, res) => res.send('Hello World!'))


