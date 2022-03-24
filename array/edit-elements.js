


let characters = ["Рамси Болтон", "Тирион Ланнистер", "Станис Баратеон", "Теон Грейджой", "Эддард Старк", "Дайенерис Таргариен", "Джон Сноу"];

const king = "Король Ночи";
const stupid = "Бран Старк";

//Задания (после каждого задания выводи результат в консоль):

//A) измени первый элемент массива на значение переменной king.
characters[0] = king;
console.log(characters);
//B) измени второй элемент массива на значение null.
characters[1] = null;
console.log(characters);
//C) измени третий элемент массива на строку "Станис Король".
characters[2]  = 'Станис король';
console.log(characters);
//D) измени четвертый элемент массива на значение переменной stupid.
characters[3] = stupid;
console.log(characters);
//E) измени пятый элемент массива на массив ["season", "01"].
characters[4] = ['season', '01'];
console.log(characters);
//F) измени шестой элемент массива на конкатенацию значений переменных king и stupid.
characters[5] = `${king} ${stupid}`;
console.log(characters);
//G) измени седьмой элемент массива на значение первого элемента этого же массива (в итоге первый и последний элементы массива будут одинаковые).
characters[6] = characters[0];
console.log(characters);