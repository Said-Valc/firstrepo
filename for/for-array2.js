//Вывести в консоль все вложенные массивы (вывести их именно как массивы, раскрывать не нужно).
let arr = [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]];

console.log(arr);

//2. Дан массив из объектов: 

let people = [{name: 'Bradly', age: 74}, {name: 'Juliya', age: 20}, 
{name: 'Walter', age: 35}, {name: 'Kristen', age: 12}, {name: 'Sam', age: 2}];

//- Вывести в консоль все имена

for(let key in people){
	console.log(people[key].name);
}

//- Вывести в консоль имена всех совершеннолетних людей (от 18 лет)
for(let key in people){
	if(people[key].age < 18) continue;
	console.log(people[key].name);
}
//- Вывести в консоль имена всех пенсионеров (старше 65 лет)
for(let key in people){
	if(people[key].age < 65) continue;
	console.log(people[key].name);
}
//- Создайте функцию `addPeople()`, которая принимает два параметра - имя и возраст - и добавляет в массив `people` объект с именем и возрастом, которые были переданы в качестве параметров. Например:


let addPeople = (name, age) => people.push({name:name, age:age});
addPeople('said', '23');
console.log(people);


//Создайте функцию getPositiveArr(), которая будет принимать один параметр - массив, и возвращать 
//новый массив, на основе старого, в который попадут только положительные элементы. Например:


let num1 = [10, -12, 231, 1, -32, -0.001, 75]; 
let num2 = [311, 122, -3, 132, 3.1, -2];
let num3 = [-2, -31, -65, -1, 7, -78, -5];

function getPositiveArr(arr){
	let new_arr = [];
	for(let i in arr){
		if(arr[i] > 0) new_arr.push(arr[i]);
	}
	return new_arr;
}

getPositiveArr(num1); // Вернет массив: [10, 231, 1, 75]
getPositiveArr(num2); // Вернет массив: [311, 122, 132, 3.1]
getPositiveArr(num3); // Вернет массив: [7]




