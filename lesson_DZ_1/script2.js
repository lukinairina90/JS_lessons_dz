//Вывести на страницу:
//1) Первое, второе и четвертое название колеса
//2) Название и марку автомобиля в одном alert-e
//3) Каждый тип комплектации в отдельном alert-е, например Трансмиссия - тип: automatic, количество скоростей: 6

var car = {
    "mark": "Totyta",
    "model": "Camry",
    "wheels": ["first", "second", "third", "four"],
    "complectation": {
        "transmission": {
            "type": "automatic",
            "numSpeeds": 6
        },
        "magnitola": {
            "name": "pioner",
            "type": "CD/DVD"
        },
        "airConditionSystem": {
            "type": "climatControl",
            "zones": 4
        }
    }
};

alert("Первое - " + car.wheels[0] + " " + "Второе - " + car.wheels[1] + " " + "Четвертое - " + car.wheels[3] + " " + "название колеса");
alert(car.mark + " " + car.model + " - название и марка автомобиля");
alert("Трансмиссия  - " + car.complectation.transmission.type + ", " + "колличество скоростей: "+ car.complectation.transmission.numSpeeds);
alert("Магнитола - " + car.complectation.magnitola.name + "," + "тип: "+ car.complectation.magnitola.type);
alert("Кондиционер - " + car.complectation.airConditionSystem.zones + ", " + "кол-во зон: "+ car.complectation.airConditionSystem.zones);