//создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования.

//Ниже напиши цикл, который выводит в консоль все названия длиннее трёх символов.

let arr = ['lisp', 'perl', 'php', 'javascript', 'java', 'python', '#c', 'C++', 'delpthi', 'pascal', 'visual basic', 'ruby'];

for(let val of arr){
	if(val.length > 3) console.log(val);
}