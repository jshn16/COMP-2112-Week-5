//definig class
class Contact {
    //private instance members
    fullName;
    contactNumber;
    emailAddress;
    //public properties
    get FullName() {
        return this.fullName;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set FullName(name) {
        this.fullName = name;
    }
    set ContactNumber(number) {
        this.contactNumber = number;
    }
    set EmailAddress(email) {
        this.emailAddress = email;
    }
    /**
     * Creates an instance of Contact.
     * @param {string} [fullName="unknown"]
     * @param {string} [contactNumber="no number"]
     * @param {string} [emailAddress="no email"]
     * @memberof Contact
     */
    constructor(fullName = "unknown", contactNumber = "no number", emailAddress = "no email") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    /**
     *
     *
     * @return {string}
     * @memberof Contact
     */
    toString() {
        let output = "";
        output = ` Name: ${this.fullName}\n Contact: ${this.contactNumber}\n Email: ${this.emailAddress}`;
        return output;
    }
    /**
     *This method converts class Data Members to a comma-separated list compatible with JSON
     *
     * @return  {string}
     * @memberof Contact
     */
    toJSON() {
        return `${this.fullName}, ${this.contactNumber}, ${this.emailAddress}`;
    }
    /**
     *
     *
     * @param {*string} event
     * @memberof Contact
     */
    fromJSON(event) {
        let stringArray = event.split(",");
        this.FullName = stringArray[0];
        this.ContactNumber = stringArray[1];
        this.EmailAddress = stringArray[2];
    }
}
//# sourceMappingURL=contact.js.map