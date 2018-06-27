class ContactNew {
    
    /**
     * Constructor
     * 
     * @param {Contacts} contactModel The contacts model object 
     */
    constructor() {
        // this.contactModel = contactModel
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
        console.log('thing!', this.contactModel)
        // return this.contactModel.add(contact)
    }
}

module.exports = ContactNew