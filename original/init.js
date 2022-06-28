window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    const initPerson2 = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson2.surname;
};

