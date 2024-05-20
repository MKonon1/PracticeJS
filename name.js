"use strict";

const name = "mykhailo";
console.log(name);

const age = 17;
console.log(age);

const iStudent = "true";
console.log(iStudent);

const myString = "hello world";
console.log(myString);

const myNumber = 23 + 10;
console.log(myNumber);

const myNull = "null";
console.log(myNull);

const message = confirm("Чи підтверджуєте ви те, що ви студент?");

if (message) {
  console.log("Дякуємо за підтвердження!");
} else {
  console.log("Дію відмінено!");
}

alert("Дія небезпечна");
const alertConfirm = confirm("Дія небезпечна, чи хочете ви продовжувати?");

if (alertConfirm) {
  alert("Дякую");
} else {
  alert("Відміна");
}
