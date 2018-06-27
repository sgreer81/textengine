const express = require('express')
let router = express.Router()

// const contacts = require('./contacts')
const contact = require('./contact')

// router.use('/api/v1', contacts)
router.use('/api/v1', contact)

module.exports = router