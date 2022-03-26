//создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования.

//Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов. (accumulator будет массивом, вспомни про .push())

let arr = ['lisp', 'perl', 'php', 'javascript', 'java', 'python', '#c', 'C++', 'delpthi', 'pascal', 'visual basic', 'ruby'];
let accumulator = '';
for(let val of arr){
	if(val.length > 3) accumulator.push(arr[i]);
}

