function formValidate() {
    let x =
        document.forms['contactUsForm'];
    ['fullName'].values;
    if (x == " ") {
        alert('full name is required');
        console.log("working")
        return false;

    }
}