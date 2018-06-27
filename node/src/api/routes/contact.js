const express = require('express')
let router = express.Router()

const ContactSingle = require('../actions/get/contactSingle')
const ContactNew = require('../actions/post/contactNew')
const ContactUpdate = require('../actions/post/contactUpdate')
const ContactDelete = require('../actions/delete/contactDelete')
const ContactsModel = require('../models/contacts')

/**
 * Get a contact by ID
 */
router.get('/contact/:id', (req, res) => {
    const contactsModel = new ContactsModel()
    const contactAction = new ContactSingle(contactsModel)

    contactAction.action(req.params.id)
        .then(results =>
            res.send(results)
        )
})

/**
 * Create a new contact
 */
router.post('/contact/', (req, res) => {
    const contactsModel = new ContactsModel()
    const contactAction = new ContactNew(contactsModel)

    contactAction.action(req.body)
        .then(results =>
            res.json(results)
        )
})

/**
 * Update an existing contact
 */
router.post('/contact/:id', (req, res) => {
    const contactsModel = new ContactsModel()
    const contactAction = new ContactUpdate(contactsModel)

    contactAction.action(req.params.id, req.body)
        .then(results =>
            res.json(results)
        )
})

/**
 * Delete a contact
 */
router.delete('/contact/:id', (req, res) => {
    const contactsModel = new ContactsModel()
    const contactAction = new ContactDelete(contactsModel)

    contactAction.action(req.params.id, req.body)
        .then(results =>
            res.json(results)
        )
})

module.exports = router