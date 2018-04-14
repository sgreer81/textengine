import express from 'express'
import routes from './api/routes'
import bodyParser from 'body-parser'

const app = express()

app.listen('8080', '0.0.0.0')

app.use(bodyParser.json())
app.use(routes)

app.get('/', (req, res) => res.send('Hello World!'))