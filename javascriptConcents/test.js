function pam() {
    var name = "Pam Beesly";
    function displayName() {
        console.log(name);
    }
    function setName(newName) {
        name = newName;
    }
    displayName();
    setName("Pam Halpert");
    displayName();
}
pam();