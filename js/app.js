
function Identity (first,last,email) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.fullName = this.firstName + " " + this.lastName;
}
Identity.prototype.fullName = function () {
    return this.firstName + " " +this.lastName;
}
$(document).ready(function() {
    $("#submit").click(function() {

        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var message =$("#textarea").val();

        var fullName = new Identity(firstName,lastName,email);
        /*alert(fullName);*/
        if(firstName.length === 0 || lastName.length === 0 || email.length === 0 || message.length === 0) {
            alert("Fill in the approptiate information");
        }
        else { 
            alert(fullName.fullName + " message received");
            console.log("reached here");
        }

    });
});