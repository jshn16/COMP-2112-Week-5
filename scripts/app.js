"use strict";
//IIFE immediately ivoked function expression
//AKA Self Executing function
(function () {
    /**
     *this method saves data to local storage
     *
     * @param {any[]} contactList
     */
    function SaveData(contactList) {
        let count = 0;
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
    function LoadContactListData() {
        //creating empty contact  array container
        let ContactArray = new Array();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let contact = new Contact();
            // console.log(localStorage.getItem(key))
            contact.fromJSON(localStorage.getItem(key));
            // console.log(contact.toString());
            ContactArray.push(contact);
        }
        return ContactArray;
    }
    //creating loadHeader function
    /**
     *this method loads the header and the page content
     *
     */
    function loadHeader() {
        $.get("./views/components/header.html", function (html_data) {
            $("header").html(html_data);
            $("li>a#Home").addClass("active");
            $("li>a").on("click", function (event) {
                event.preventDefault();
                //change title
                document.title = $(this).prop("id");
                //change URL
                history.pushState({}, "", "/" + document.title);
                //remove the active class from each list item
                $("li>a").each(function () {
                    $(this).removeClass("active");
                });
                //Activate the current link 
                $("li>a#" + document.title).addClass("active");
                loadContent();
            });
        });
    }
    /**
     *this method injects the page content
     *
     */
    function loadContent() {
        let contentLink = document.title.toLowerCase();
        $.get("./views/content/" + contentLink + ".html", function (html_data) {
            $("main").html(html_data);
        });
    }
    //creating function to load footer
    /**
     *This method loads and injects the footer content
     *
     */
    function loadFooter() {
        $.get("./views/components/footer.html", function (footer_data) {
            $("footer").html(footer_data);
        });
    }
    function Start() {
        document.title = "Home";
        //change URL
        history.pushState({}, "", "/Home");
        loadContent();
        loadHeader();
        loadFooter();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map