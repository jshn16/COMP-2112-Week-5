//definig class
class Contact {

    //private instance members
    private fullName: string;
    private contactNumber: string;
    private emailAddress: string;

    //public properties
    get FullName(): string {
        return this.fullName;
    }

    get ContactNumber(): string {
        return this.contactNumber;
    }

    get EmailAddress(): string {
        return this.emailAddress;
    }

    set FullName(name: string) {
        this.fullName = name;
    }

    set ContactNumber(number: string) {
        this.contactNumber = number;
    }

    set EmailAddress(email: string) {
        this.emailAddress = email;
    }

/**
 * Creates an instance of Contact.
 * @param {string} [fullName="unknown"]
 * @param {string} [contactNumber="no number"]
 * @param {string} [emailAddress="no email"]
 * @memberof Contact
 */
constructor(fullName: string = "unknown", contactNumber: string = "no number", emailAddress: string = "no email") {

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
public toString(): string {


        let output="";

        output =` Name: ${this.fullName}\n Contact: ${this.contactNumber}\n Email: ${this.emailAddress}`;
        return output;
    }


/**
 *This method converts class Data Members to a comma-separated list compatible with JSON
 *
 * @return  {string}
 * @memberof Contact
 */
public toJSON(): string {

        return `${this.fullName}, ${this.contactNumber}, ${this.emailAddress}`
    }

/**
 *
 *
 * @param {*string} event 
 * @memberof Contact
 */
public fromJSON(event:string):void {
        let stringArray:string[]=event.split(",")
        this.FullName = stringArray[0];
        this.ContactNumber = stringArray[1];
        this.EmailAddress = stringArray[2];
    }

//private methods
}
