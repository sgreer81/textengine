const db = require('mongoose')

db.connect('mongodb://root:example@db')

module.exports = db