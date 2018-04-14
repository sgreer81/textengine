class ContactNew {
    
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
     * @param {Object} contact
     * @param {string} contact.phoneNumber
     * @param {string} contact.firstName
     * @param {string} contact.lastName
     * @param {string} contact.email
     */
    action(contact) {
        // TODO: Need to add validation
        return this.contactModel.add(contact)
    }
}

export default ContactNew