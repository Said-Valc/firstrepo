const arr = [];

arr.push('www');

console.log(arr);

const arr3Values = [];

arr3Values.push(1,'ww', true);

console.log(arr3Values);

const arrBool = [true, false];

arrBool.unshift(null);

console.log(arrBool);

const arrEmpty = [[],[]];

arrEmpty[1].push(true,true,true);

console.log(arrEmpty);

const arrLang = ['html', 'css'];

arrLang.unshift('git');

arrLang.push('javascript');


console.log(arrLang);

arrLang[4] = 'figma';

console.log(arrLang);

let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push('react');
// B) выведи весь массив в консоль
console.log(stack);
// C) добавь в конец массива значение "redux" (используй способ с [])
stack[stack.length -1] = 'redux';
// D) выведи весь массив в консоль
console.log(stack);
// E) добавь в начало массива значение "git"
stack.unshift('git');
// F) выведи весь массив в консоль
console.log(stack);
/* 
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux". 
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */
console.log(`Сначала мы изучим ${stack[0]} а потом мы изучим ${stack[5]}`);
// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".
stack.push('mysql', 'mongodb');
// I) выведи в консоль длину массива
console.log(stack.length);