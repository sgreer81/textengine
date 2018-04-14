class ContactUpdate {
    
    /**
     * Constructor
     * 
     * @param {Contacts} contactModel The contacts model object 
     */
    constructor(contactModel) {
        this.contactModel = contactModel
        this.action = this.action.bind(this)
    }

    /**
     * Get contact by ID
     * 
     * @param {string} id
     * @param {Object} contact
     * @param {string=} contact.phoneNumber
     * @param {string=} contact.firstName
     * @param {string=} contact.lastName
     * @param {string=} contact.email
     */
    action(id, contact) {
        // TODO: Need to add validation
        return this.contactModel.update(id, contact)
    }
}

export default ContactUpdate