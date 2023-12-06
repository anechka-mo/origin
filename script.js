"use strict"; //"Строгий режим" -говорим браузеру что используем современный код

// const arr = [1, 2, 3];
// const obj = {a: 1, b: 2};
 /*
const obj = { //обьект
    Anna: 500,
    'Alice': 800
};

const arr = ['a', 'b', 'c']; //массив
const arrObj = { // записали массив как обьект
    0: 'a',
    1: 'b',
    2: 'c'
}

// console.log(arr[1]); // b - вызывает 2ой эл-т
// console.log(arrObj[0]); // a - вызывает 1ый
// -------------------------

//arrObj.b = '1234'; //обращаюсь к св-ву,кот не существует (создаю новое св-во)
arrObj['b'] = '1234'; // тоже самое, только др свособ
console.log(arrObj['b']);
console.log(arrObj.b);
*/

// const result = confirm('Are you here?');
// console.log(result); //2 ответа: Отмена и Да


// const answer = +prompt('Вам есть 18?', ''); //+ делает из string -- number
// console.log(answer +5);

// const answers = [];

// answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

//Интерполяция:
const category = 'toys';
console.log(`https://someurl.com/${category}/5`)

const user = 'Ivan';
alert(`Привет, ${user}`);