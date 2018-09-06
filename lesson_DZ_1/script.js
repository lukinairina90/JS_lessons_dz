// // Объявление переменных
//   var LeftBorderWidth = 1;
//   const pi = 3.14;
//   {
//       let second = 2;
//   }
//
//
// // 6 типов двнных (с новым стандартом 7)
// var number = 5;
// var string = "Hello";
// var sym = Sumbol();
// var boolean = true;
// var obj = {};
// null;        // когда в коде чего-то просто не существует
// undefined;   // объект который существует, но никакого значения не имеет
// //Специальные числовые значения
// infinity   //когда делим на ноль (0)
// NaN     // операции которые не соответствуют математической логике


//   obj = {
//     name: "Joe face",
//     age: 25,
//     isMarried: true
//   }
//
// console.log(obj.name);
// console.log(obj['name']);
//
// var arr = ['plum', 'orange', 'apple'];
// console.log(arr[0]);
//
// alert('HELLO!');
// confirm('are you here?');
// prompt('Вам есть 19?', '19');
//
// var answer = prompt('Вам есть 19?', '19');
//
// console.log( typeof(answer));




//-------------DZ-----------
var yourBudget = prompt("Ваш бюджет?", "35000");
var yourShopName = prompt("Название вашего магазина?", "ООО ОБЖОРА");

console.log(yourBudget, yourShopName);

mainList = {
    "butget": yourBudget,
    "shopName": yourShopName,
    "shopGoods": ["Tapki", "Trusi", "Noski"],
    "employees": {
        "direktor": "Petrov",
        "prodavets": "Ivanova",
        "kasir": "Sidorova"
    },
    "open": true
};

var firstProduct = prompt("Какой товар будете покупать?");
var secondProduct = prompt("Какой товар будете покупать?");
var thirdProduct = prompt("Какой товар будете покупать?");

mainList.shopGoods[3] = firstProduct;
mainList.shopGoods[4] = secondProduct;
mainList.shopGoods[5] = thirdProduct;

alert("You butget per day is: " + mainList.butget / 30);