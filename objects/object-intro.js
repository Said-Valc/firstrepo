

let start = {
	key: 'value',
	param: 'string'
};

/*Задача 1.2
В том же файле создай объект, person у которого будут следующие ключи и значения:

fistname - твоё имя
lastname - твоя фамилия
city - название твоего города/села
age - твой возраст
height - твой рост (сантиметры)
heightMeters - твой рост (метры)
born - год рождения
haveCar - есть ли у тебя машина (вспомни про boolean)
carName - название машины, если машины нет, то undefined
haveSkills - занимался ли ранее программированием
level - как оцениваешь свою обучаемость (от 1 до 10)
mobilePhone - инфа о твоем телефоне, включая:
название модели
примерная цена в рублях
название оператора связи
производитель
Для последнего пункта нужен будет вложенный объект. */

let person = {
	firstname: 'said',
	lastname: 'valc',
	city: 'grozny',
	age: 23,
	height: 186,
	heightMeters: 1.86,
	born: 1997,
	haveCar: true,
	carName: undefined,
	haveSkills: true,
	level: 7,
	mobilePhone: 'iphone 8; 1000 rub; megafon; apple;',
	obj : {}
};

/*
Задача 1.3
В том же файле создай объект galaxy, у которого будут минимум 10 свойств.

Свойства должны давать информацию о нашей галактике. Можешь черпать инфу из этой статьи википедии.

Используй типы данных: string, number (в том числе дробные), boolean, null, undefined, object.

Задача 1.3.2
Пользуясь оператором delete удали из объекта galaxy любое свойство.

Выведи объект galaxy в консоль.
*/

let galaxy = {
	countStars: '100 - 400 миллиард',
	speed: '299 792 458 м / с'
};

delete galaxy.speed;
console.log(galaxy);


/*

Задача 1.4
В том же файле создай объект student, в котором будет инфа о любом из твоих одногруппников.

Инфа должна включать имя, фамилию и регион проживания.

Задача 1.5
Добавь в объект student из задачи 1.4 новый ключ age, в котором будет возраст студента.

Выведи объект student в консоль.

*/

let student = {
	name: 'muhammad',
	lastname: 'mahmudov',
	address: 'grozny',
}

student.age = 23;

console.log(student);




