const name = "intocode bootcamp";

const nameLetters = name.split('');// <- допиши эту строку, чтобы в значении был 
                          // массив из букв переменной name

const words = name.split(' '); //<- допиши эту строку, чтобы в значении был 
                 // массив из слов "intocode"  и "bootcamp".
     console.log(nameLetters);
// ⚠️ Нельзя напрямую писать эти значения, они должны определяться
//   с помощью соответствующих методов.

// выведи в консоль последнюю букву переменной name. 
console.log(name.charAt(name.length-1));
// выведи в консоль второе слово переменной name
console.log(name.charAt(1));
// добавь в конец массива words любое слово
words.push('www');
console.log(words);
// добавь в начало массива nameLetters четыре новых 
nameLetters.unshift('1',2,true, false);
console.log(nameLetters);
// элемента 't', 'h', 'e' и ' '. Последний элемент это пробел.
