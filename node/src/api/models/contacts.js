const db = require('./db')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    phoneNumber: String,
    firstName: String,
    lastName: String,
    email: String
})

db.model('Contact', contactSchema)

module.exports = db

// const ContactsModel = db.define('contacts', {
//     phoneNumber: { type: Sequelize.STRING(50), unique: true },
//     firstName: Sequelize.STRING(50),
//     lastName: Sequelize.STRING(50),
//     email: Sequelize.STRING(75)
// })

// class Contacts {

//     /**
//      * Add new contact to DB
//      *
//      * @param {Object} contact
//      * @param {string} contact.phoneNumber
//      * @param {string} contact.firstName
//      * @param {string} contact.lastName
//      * @param {string} contact.email
//      *
//      * @returns {Promise}
//      */
//     async add(contact) {
//         await ContactsModel.sync()

//         try {
//             return await ContactsModel.create(contact)
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     /**
//      * Update an existing contact
//      *
//      * @param {string} contactId contact ID
//      * @param {Object} contact
//      * @param {string=} contact.phoneNumber
//      * @param {string=} contact.firstName
//      * @param {string=} contact.lastName
//      * @param {string=} contact.email
//      *
//      * @returns {Promise}
//      */
//     async update(contactId, contact) {
//         await ContactsModel.sync()

//         try {
//             await ContactsModel.update(contact, { where: { id: contactId } })
//             return await this.find({ id: contactId })
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     /**
//      * List all of the contact in the database
//      *
//      * @returns {Promise}
//      */
//     async list() {
//         try {
//             return await ContactsModel.findAll()
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     /**
//      * Find contacts
//      *
//      * @param {Object} args Search args corresponding to model
//      *
//      * @returns {Promise}
//      */
//     async find(args) {
//         try {
//             return await ContactsModel.findAll({
//                 where: args
//             })
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     /**
//      * Delete a contact from database by ID
//      *
//      * @param {string} contactId
//      */
//     async delete(contactId) {
//         try {
//             const deleted = await ContactsModel.destroy({ where: { id: contactId } })
//             if (deleted) return { message: `Contact with id ${contactId} was deleted` }
//             return { message: `Contact could not be deleted` }
//         } catch (e) {
//             console.error(e)
//         }
//     }
// }

// module.exports = Contacts
