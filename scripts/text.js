const age = document.getElementById('age');

// Date format: MM/DD/YYYY
age.innerHTML = " (" + calculateAge("09/07/2001", getDate()) + ")";

function calculateAge(birthDate, today) {
    birthDate = new Date(birthDate);
    today = new Date(today);

    let years = (today.getFullYear() - birthDate.getFullYear());

    if (today.getMonth() < birthDate.getMonth() ||
        today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}

function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return (today);
}