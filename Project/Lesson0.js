'use strict';

//Первый код с udemy
/*
var leftBorderWidth = 1;

let second = 2;
const pi = 3.14;

console.log(second);
console.log(leftBorderWidth);


var number = 5;
var string = "Hello wordld";
var sym = Symbol();
var boolean = true;
null;
undefined;
var object = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person["name"]);

let arr = ['plum.png','orange.jpg', 'apple.bmp'];

console.log(arr[1]);

alert("Hello world");



let bool = +prompt("Есть ли Вам 18 лет?", "");
console.log(bool);

let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

let isChecked = true,
    isClose = true;

console.log(isChecked && isClose);
let a;



*/



if (num < 49){
    console.log("Неверно");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("Хватит");
}

(num == 50) ? console.log('Верно!') : console.log('Неверно!');

switch (num){
    case num < 49:
        console.log("Маловато");
        break;
    case num > 100:
        console.log("Много");
        break;
    case 50:
        console.log("То, что надо");
        break;
    default:
        console.log("Что-то пошло не так:)");
        break;
}


let num = 50;
//while (num < 55) {
//   console.log(num);
//   num++;

//do {
//    console.log(num);
//    num++
//} while (num < 55)

for (let i = 0; i < 8; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
