const express = require('express')
let router = express.Router()

const ContactsList = require('../actions/get/contactsList')
const ContactsModel = require('../models/contacts')

router.get('/contacts', (req, res) => {
    const contactsModel = new ContactsModel()
    const contactsAction = new ContactsList(contactsModel)

    contactsAction.action()
        .then(results =>
            res.send(results)
        )
})

module.exports = router