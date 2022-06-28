document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = "Имя Отчетство";

    /*Сброс фамилии*/
    document.getElementById('surnameOutput').innerText = "Фамилия";
    /*Сброс фамилии*/

    /*Сброс профессии*/
    document.getElementById('professionOutput').innerText = "Профессия";
    /*Сброс профессии*/

    /*Сброс месяца рождения*/
    document.getElementById('birthMonthOutput').innerText = "Месяц рождения";
    /*Сброс месяца рождения*/

    /*Сброс года рождения*/
    document.getElementById('birthYearOutput').innerText = "Год рождения";
    /*Сброс года рождения*/

    /*Сброс дня рождения*/
    document.getElementById('birthDayOutput').innerText = "День рождения";
    /*Сброс дня рождения*/

    /*Сброс пола*/
    document.getElementById('genderOutput').innerText = "Пол";
    /*Сброс пола*/

    /*Сброс иконки*/
    document.getElementById('card-bg').style.background = "";
    /*Сброс иконки*/
});

document.getElementById('generateBtn').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;

    /*Отображение фамилии*/
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    /*Отображение фамилии*/

    /*Отображение профессии*/
    document.getElementById('professionOutput').innerText = initPerson.profession;
    /*Отображение профессии*/

    /*Отображение месяца рождения*/
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    /*Отображение месяца рождения*/

    /*Отображение года рождения*/
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    /*Отображение года рождения*/

    /*Отображение дня рождения*/
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    /*Отображение дня рождения*/

    /*Отображение пола*/
    document.getElementById('genderOutput').innerText = initPerson.gender;
    /*Отображение пола*/

    /*Отображение иконки*/
    document.getElementById('card-bg').style.background = `url(img/`+initPerson.icon+`)`;
    /*Отображение иконки*/
});
