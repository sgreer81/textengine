import express from 'express'
let router = express.Router()

import ContactsList from '../actions/get/contactsList'
import ContactsModel from '../models/contacts'

router.get('/contacts', (req, res) => {
    const contactsModel = new ContactsModel()
    const contactsAction = new ContactsList(contactsModel)

    contactsAction.action()
        .then(results =>
            res.send(results)
        )
})

export default router