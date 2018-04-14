class ContactsList {
    
    /**
     * Constructor
     * 
     * @param {Contacts} contactModel The contacts model object 
     */
    constructor(contactModel) {
        this.contactModel = contactModel
        this.action = this.action.bind(this)
    }

    action() {
        return this.contactModel.list()
    }
}

export default ContactsList