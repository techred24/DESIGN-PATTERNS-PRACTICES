function doAddContact() {
    let contactObj = document.getElementById("contact");
    let newContactObj = contactObj.cloneNode(true);
    document.getElementById("contact_list").appendChild(newContactObj);
}