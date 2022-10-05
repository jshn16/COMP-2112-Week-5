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


            $("header").html(html_data);
            $("li>a").on("click",function(){
                let title=$(this).prop("id") as string;
                document.title=title.substring(0,1).toUpperCase()+title.substring(1)
                
                
                loadContent()
                
            })
            
        })
    }


    //creating function to load footer
    function loadFooter(): void {
        $.get("./views/components/footer.html", function (footer_data) {
            $("footer").html(footer_data)
        })
    }

    function loadContent(): void {

        switch (document.title) {
            case "Home":
                $.get("./views/content/home.html", function (html_data) {
                    $("main").html(html_data)
                })
                break;

            case "Project":
                $.get("./views/content/projects.html", function (html_data) {
                    $("main").html(html_data)
                })
                break;

            case "Service":
                $.get("./views/content/services.html", function (html_data) {
                    $("main").html(html_data)
                })
                break;

            case "About":
                $.get("./views/content/about.html", function (html_data) {
                    $("main").html(html_data)
                })
                break;

            case "Contact":
                $.get("./views/content/contact.html", function (html_data) {
                    $("main").html(html_data)
                })
                break;
        }

    }


    function Start() {

        
document.title="Home"
        loadContent()
        loadHeader();

        loadFooter()


    }

    window.addEventListener("load", Start);
})();


