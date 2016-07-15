$(document).ready(function() {

    //each contact stored as an object with number of properties

    var contacts = [];




    $('form').on('submit', function(event) {
        event.preventDefault()

        var Contact = {

            firstName: $('#firstName').val() || null,
            lastName: $('#lastName').val() || null,
            phone: $('#phone').val() || null,
            email: $('#email').val() || null,
            address: $('#address').val() || null,



        };
        console.log(Contact)
        if (Contact.firstName && Contact.lastName && Contact.email) {
            addContact(Contact)

        } else {
            alert('first, last and email required')
        }


    });


    $('.eachContact').on('click', 'li', function() {

        var id = $(this).attr('data-id')
        var contact = contacts[id]
        showDetails(contact)
    })









    //minimum of firstName, lastName and email required






    //append to contactList



    function addContact(contact) {
        var template = ('<li data-id = "{contacts.length}"> {firstName} {lastName} </li>')
        var output = template
            .replace('{contacts.length}', contacts.length)
            .replace('{firstName}', contact.firstName)
            .replace('{lastName}', contact.lastName);

        $('ul').append(output)
        contacts.push(contact)

    }














    //show details

    function showDetails(contact) {
        var template = ('<p> {firstName} {lastName} <br> {phone} <br> {email} <br> {address} </p>')
        var output = template

            .replace('{firstName}', contact.firstName)
            .replace('{lastName}', contact.lastName)
            .replace('{phone}', contact.phone)
            .replace('{email}', contact.email)
            .replace('{address}', contact.address);

        $('.contactDetails').append(output)

    }

    /*function resetForm () {
  
  $('form').val('');

  
}
resetForm()*/

});
