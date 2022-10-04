"use strict";
//IIFE immediately ivoked function expression
//AKA Self Executing function
(function () {
    /**
     *this method saves data to local storage
     *
     * @param {any[]} contactList
     */
    function SaveData(contactList: any[]):void {
        let count = 0
        for (let contacts of contactList) {

            let contact = new Contact(contacts.FullName, contacts.ContactNumber, contacts.EmailAddress);
            localStorage.setItem(count.toString(), contact.toJSON());
            count++;

        }
    }

    /**
     *this method reads our data from local storage and returns a contact array
     *
     * @return {Contact[]}
     */
    function LoadContactListData(): Contact[] {
        //creating empty contact  array container
        let ContactArray = new Array<Contact>()
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let contact = new Contact();

            // console.log(localStorage.getItem(key))
            contact.fromJSON(localStorage.getItem(key));

            // console.log(contact.toString());
            ContactArray.push(contact)
        }
        return ContactArray;
    }



    function Start() {

        console.log("App Started")
        $.getJSON("./data/contacts.json", (event) => {

            //geting data
            let contactList: any[] = event.ContactList;

            //load data
            SaveData(contactList)

            //   console.log(contact.toString());
            let ContactArray = LoadContactListData()

            for (const data of ContactArray) {
                console.log(data.toString())
            }


        })

        // localStorage.setItem("0","Jashan");
    }

    window.addEventListener("load", Start);
})();


