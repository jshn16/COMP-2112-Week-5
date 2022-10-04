"use strict";
//IIFE immediately ivoked function expression
//AKA Self Executing function
(function () {
    /**
     *this method saves data to local storage
     *
     * @param {any[]} contactList
     */
    function SaveData(contactList: any[]): void {
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

    //creating loadHeader function

    function loadHeader(): void {
        $.get("./views/components/header.html", function (html_data) {


            //vanilla method
            // document.getElementsByTagName("header")[0].innerHTML=html_data;

            // with JQuery
            $("header").html(html_data)

            // $("#homePage").addClass("active")

            // let navLinks = document.querySelectorAll("li>a.nav-link");
            // for(const link of navLinks as HTMLAnchorElement){
            //     console.log(link.href);
            // }

            // let navLinks=$("li>a.nav-link")
            // for(const navLink of navLinks){
            //     console.log(navLink.prop("href"))
            // }

            // $("li>a.nav-link").each(function(navLink){
            //     console.log($(this).prop("href") )
            // })

            switch(document.title){
                case "Home":
                    $("#homePage").addClass("active")
                    break;

                case "Projects":
                    $("#projectPage").addClass("active")
                    break;
                    
                case "Services":
                    $("#servicePage").addClass("active")
                    break;

                case "About":
                    $("#aboutPage").addClass("active")
                    break;

                case "Contact":
                    $("#contactPage").addClass("active")
                    break;
            }


        })
    }


    //creating function to load footer
    function loadFooter(): void {
        $.get("./views/components/footer.html", function (footer_data) {
            $("footer").html(footer_data)
        })
    }



    function Start() {

        console.log("App Started")

        //calling loadHeader function
        loadHeader();

        //calling loadFooter function
        loadFooter()

        $.getJSON("./data/contacts.json", (event) => {

            //geting data
            let contactList: any[] = event.ContactList;

            //load data
            SaveData(contactList)

            //   console.log(contact.toString());
            let ContactArray = LoadContactListData()

            for (const data of ContactArray) {
                // console.log(data.toString())
            }


        })

        // localStorage.setItem("0","Jashan");
    }

    window.addEventListener("load", Start);
})();


