const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Наталья",
            "id_3": "Агафья",
            "id_4": "Полина",
            "id_5": "Раиса",
            "id_6": "Дарья",
            "id_7": "Зинаида",
            "id_8": "Татьяна",
            "id_9": "Марина",
            "id_10": "Анжела"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
    	/*сокращаем и упрощаем код для Модуля 15*/
    	return (this.person.gender == this.GENDER_FEMALE) ? this.randomValue(this.firstNameFemaleJson) : this.randomValue(this.firstNameMaleJson);
		/*сокращаем и упрощаем код для Модуля 15*/
		
		/*исходная конструкция*/
		/*
        if(this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }
		*/
        /*исходная конструкция*/
    },


    randomSurname: function() {
    	/*сокращаем и упрощаем код для Модуля 15*/
    	let surnameTail = (this.person.gender == this.GENDER_FEMALE) ? "a" : "";
    	return this.randomValue(this.surnameJson) + surnameTail;
		/*сокращаем и упрощаем код для Модуля 15*/

		/*if(this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + "а";
        } else {
            return this.randomValue(this.surnameJson);
        }*/
    },

    /*Функция генерации года рождения*/
    birthYear: function() {
        return this.randomIntNumber(2021, 1940);
    },
    /*Функция генерации года рождения*/

    /*Функция генерации пола*/
    randomGender: function() {
        return (this.randomIntNumber(1, 0) == 0) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },
    /*Функция генерации пола*/

    getPerson: function () {
        this.person = {};
        /*Генерация пола*/
        this.person.gender = this.randomGender();
        /*Генерация пола*/
        this.person.firstName = this.randomFirstName() + " " + additionalGenerator.randomPatronymic(this.person.gender);

        /*Генерация фамилии*/
        this.person.surName = this.randomSurname();
        /*Генерация фамилии*/

        /*Генерация месяца рождения*/
        this.person.birthMonth = additionalGenerator.randomMonth();
        /*Генерация месяца рождения*/

        /*Генерация года рождения*/
        this.person.birthYear = this.birthYear();
        /*Генерация года рождения*/

        /*Генерация дня рождения*/
        this.person.birthDay = additionalGenerator.randomDay(this.person.birthMonth);
        /*Генерация дня рождения*/
        
        /*Генерация профессии*/
        this.person.profession = additionalGenerator.randomProfession(this.person.gender);
        /*Генерация профессии*/

        /*Генерация иконки*/
        this.person.icon = (this.person.gender == this.GENDER_MALE) ? "male.png" : "female.png";
        /*Генерация иконки*/

        return this.person;
    }
};

/*Отдельный объект для генерации отчества в зависимости от пола, профессии*/
const additionalGenerator = {

    /*Базовый массив отчеств*/
    basePatronymic: `{
        "count": 8,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Михаил",
            "id_6": "Даниил",
            "id_7": "Егор",
            "id_8": "Денис"
        }
    }`,
    /*Базовый массив отчеств*/

    /*Массивы профессий*/
    maleProfessions: `{
        "count": 7,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтер",
            "id_4": "Летчик",
            "id_5": "Капитан дальнего плавания",
            "id_6": "Актёр",
            "id_7": "Учёный"
        }
    }`,
    femaleProfessions: `{
        "count": 7,
        "list": {     
            "id_1": "Продавщица",
            "id_2": "Учительница",
            "id_3": "Повариха",
            "id_4": "Бухгалтер",
            "id_5": "Стюардесса",
            "id_6": "Актриса",
            "id_7": "Уборщица"
        }
    }`,
    /*Массивы профессий*/

    /*Массив месяцев*/
    birthMonth: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    /*Массив месяцев*/

    /*Функция добавления окончания к отчеству в зависимости от пола*/
    randomPatronymic: function(gender) {
    	/*сокращаем и упрощаем код для Модуля 15*/
    	let basePatronymicTail = (gender == personGenerator.GENDER_FEMALE) ? "овна" : "ович";
    	return personGenerator.randomValue(this.basePatronymic) + basePatronymicTail;
    	/*сокращаем и упрощаем код для Модуля 15*/
    	/*исходная конструкция*/
        /*return (gender == personGenerator.GENDER_FEMALE) ? personGenerator.randomValue(this.basePatronymic) + "овна" : personGenerator.randomValue(this.basePatronymic) + "ович";*/
        /*исходная конструкция*/
    },
    /*Функция добавления окончания к отчеству в зависимости от пола*/

    /*Функция генерации профессии в зависимости от пола*/
    randomProfession: function(gender) {
        return (gender == personGenerator.GENDER_FEMALE) ? personGenerator.randomValue(this.femaleProfessions) : personGenerator.randomValue(this.maleProfessions);
    },
    /*Функция генерации профессии в зависимости от пола*/

    /*Функция генерации месяца рождения*/
    randomMonth: function() {
        return personGenerator.randomValue(this.birthMonth);
    },
    /*Функция генерации месяца рождения*/

    /*Функция генерации дня рождения*/
    randomDay: function(month) {
    	/*сокращаем и упрощаем код для Модуля 15*/
        let month30 = ["апреля", "июня", "сентября", "ноября"];
        let lastDayOfMoth = (month30.indexOf(personGenerator.person.birthMonth) != -1) ? 30 : ((personGenerator.person.birthMonth == "февраля") ? 28 : 31);
        return personGenerator.randomIntNumber(lastDayOfMoth,1);
        /*сокращаем и упрощаем код для Модуля 15*/

        /*исходная конструкция*/
		/*     
		let month30 = ["апреля", "июня", "сентября", "ноября"];
        if(month30.indexOf(personGenerator.person.birthMonth) != -1) {
            return personGenerator.randomIntNumber(30,1);
        } else if(personGenerator.person.birthMonth == "февраля") {
            return personGenerator.randomIntNumber(28,1);
        } else {
            return personGenerator.randomIntNumber(31,1);
        }
        */
        /*исходная конструкция*/
    },
    /*Функция генерации дня рождения*/

};
/*Отдельный объект для генерации отчества в зависимости от пола, профессии*/