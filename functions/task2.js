//Задача 1. Создай функции с именами: removeUser; createPost;addItem;readFile;getElements;createParentElement;startGame;sendMessage;


function removeUser(){

}

let s_removeUser = () => {};

removeUser();

function createPost(){

}

let s_createPost = () => {};

createPost();

function addItem(){

}

let s_addItem = () => {};

addItem();

function readFile(){

}

let s_readFile = () => {};

readFile();

function getElements(){

}

let s_getElements = () => {};

getElements();

function createParentElement(){

}

let s_createParentElement = () => {};

createParentElement();

function startGame(){

}

let s_startGame = () => {};

startGame();

function sendMessage(){
	
}

let s_sendMessage = () => {};

sendMessage();


//Задача 2. Создай десять функций с любыми названиями (более или менее логичными). 
//Каждая из созданных функций должна принимать по одному параметру. Выводить что-то или возвращать из функции не нужно.



function getName(name){
	console.log(name);
}

let s_getName = (name) => console.log(name);

function getLastname(lastname){
	console.log(lastname);
}

let s_getLastname = (lastname) => console.log(lastname);

function getAge(age){
	console.log(age);
}

let s_getAge = age => console.log(age);

function getCity(city){
	console.log(city);
}

let s_getCity = city => console.log(city);

function getDate(date){
	console.log(date);
}

let s_getDate = date => console.log(date);

function getYear(year){
	console.log(year);
}

let s_getYear = year => console.log(year);

function getDay(day){
	console.log(day);
}

let s_getDay = day => console.log(day);

function getHour(hour){
	console.log(hour);
}

let s_getHour = hour => console.log(hour);

function getTitle(title){
	console.log(title);
}

let s_getTitle = title => console.log(title);

function getDescription(description){
	console.log(description);
}

let s_getDescription = (description) => { console.log(descirption)};

function getText(text){
	console.log(text);
}

let s_getText = (text) => console.log(text);

//Задача 3. Создай еще 10 функций с любыми названиями. Каждая из функций должна 
//получать параметр и просто возвращать его. Давай этим функциям и их параметрам правдоподобные названия.

function addressOffice(address){
	return address;
}

let s_addressOffice = address => address;

function titleOffice(title){
	return title;
}

let s_titleOffice = title => title;

function nameOffice(name){
	return name;
}

let s_name = name => name;

function descriptionOffice(description){
	return description;
}

let s_descriptionOffice = (descirpion) => {return description};

function phoneOffice(phone){
	return phone;
}

let s_phoneOffice = name => name;

function faxOffice(fax){
	return fax;
}

let s_faxOffice = fax => fax;

function locationOffice(location){
	return location;
}

let s_locationOffice = location => location;

function countryOffice(country){
	return country;
}

let s_countryOffice = country => country;

function parametersOffice(parameters){
	return parameters;
}

let s_parametersOffice = parameters => parameters;

function positionOffice(position){
	return position;
}

let s_position = position => position;

function roleOffice(role){
	return role;
}

let s_roleOffice = role => role;


//Задача 4. Создай пять разных функций, каждая из которых принимает один параметр. 
//Затем функция должна вернуть значение этого параметра, умноженное на два. Выведи результат работы функции в консоль.

function func1(num){
	return num * 2;
}

let s_func1 = num => num * 2;
console.log(func1());

function func2(num){
	return num * 2;
}

let s_func2 => num * 2;

console.log(func2());

function func3(num){
	return num * 2;
}

let s_func3 = num => num * 2;

console.log(func3());

function func4(num){
	return num * 2;
}

let func4 = num => num * 2

console.log(func4());

function func5(num){
	return num * 2;
}

let func5 => (num) => {return num * 2}

console.log(func5());


//Задача 5. Создай функцию, которая принимает в качестве параметра массив и возвращает первый элемент этого массива. Вызови функцию в консоль.




function firstElemArr(arr){
	return arr[0];
}

let s_fistElemArr = (arr) => {return arr[0]}


//Задача 6. Создай функцию, которая принимает в качестве параметра массив и возвращает последний элемент этого массива. Вызови функцию в консоль.

function endElemArr(arr){
	return arr[arr.length -1];
}

let endElemArr = (arr) => {arr[arr.length -1]}

//Задача 7. Добавь комментарии к каждой строке следующего кода:


function printMyFullName(firstname, secondname) { //Принимаем 2 параметра
  const fullname = `${firstname} ${secondname}`;  // делаем конкатенацию
  
  return fullname; //возврощаем результат
}

let s_printMyFullName = (firstname, secondname) => {const fullname = `${firstname} ${secondname}` return fullname};

console.log(printMyFullName('into', 'code')); // выводим результат


function getSumOfFirstAndLastElement(arr) { //принимаем параметр массив
  if(arr.length < 2) { // если длина массива меньше 2
    return 'леее, минимум два элемента нужно жи есть';// говорим дагерскую хрень
  } else { // если длина больше чем 2 или во всех других случаях 
    const lastIndex = arr.length - 1; // создаем константу где значение индекс последнего элемента массива
    
    return arr[0] + arr[lastIndex]; //возврощаем строку где первый и последний элемент массива или складывание в случае если это намбер
  }
}

let s_getSumFirstAndLastElement = (arr) => {
	if(arr.length < 2) { // если длина массива меньше 2
    return 'леее, минимум два элемента нужно жи есть';// говорим дагерскую хрень
  } else { // если длина больше чем 2 или во всех других случаях 
    const lastIndex = arr.length - 1; // создаем константу где значение индекс последнего элемента массива
    
    return arr[0] + arr[lastIndex]; //возврощаем строку где первый и последний элемент массива или складывание в случае если это намбер
  }
};

console.log(getSumOfFirstAndLastElement([]); // вызываем функцию и в ответ получим строку "леее"

console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]); // вызываем функцию и в ответ получим 11


//Задача 8. Напиши к следующему коду комментарий, объясняющий почему функция возвращает "html" вместо "css".


let text = "css"; //создаем переменную text с значением css

function testVariableScope() { //создаем функцию без параметра
  let text = "html"; // создаем пермеенную text c значением html
  
  return text;//возврощаем text
}

let testVariableScope = () => {
	let text = 'html';
	return text;
}
console.log(testVariableScope()); //вызываем функцию


//Задача 9: Погугли и узнай почему следующий код выполняется несмотря на то, что функция объявлена после того, как используется (то есть вызывается).

console.log(addToNumbers(4, 8))

function addToNumbers(x, y) { //выполняет потому что это обычная функция
  return x + y;
}

let s_addToNumbers = (x, y) => x + y;



//Функции 2
//1. Напиши функцию, которая принимает 1 параметр - число, и возвращает строку четное оно или нечетное. 
function oddAndEven(param){
	if(param % 2 == 2) return 'Четное';
	return 'нечетное';
}

let s_oddAndEven = (param) => (param % 2 == 0)? 'честное' : 'нечетное';
//2. Напиши функцию, которая принимает один параметр - число и возвращает строку положительное оно или отрицательное.

function negativeOrPositive(param){
	return (param > 0) ? 'positive' : 'negative';
}

let = s_negativeOrPositive = (param) => (param > 0) 'positive' : 'negative';

//3. Напиши функцию, которая прининимает два параметра - числа и возвращает их произведение.

function multiplication(param1, param2){
	return param1 * param2;
}

let s_multiplication = (param1, param2) => param1 * param2;

//4. Напиши функцию, которая прининимает два параметра - числа и возвращает наибольшее из них.

function greates(param1, param2){
	return (param1 > param2) ? param1: param2;
}

let s_greates = (param1, param2) => (param1 > param2) ? param1: param2;


//5. Напиши функцию, которая принимает один параметр - строку и возвращает количество символов в строке.

function lengthString(str){
	return str.length;
}
let s_lengthString = str => str.length;
//6. Напиши функцию, которая принимает два параметра - строки и возвращает ту, что длинее.

function longString(str1, str2){
	return (str1.length > str2.length) ? str1: str2;
}

let s_longString = (str1, str2) (str1.length > str2.length)? str1 : str2;
//7. Напиши функцию, которая принимает два параметра строку и число - и возращает столько символов строки, сколько указано во втором параметре,
// Например: f("lorem", 3); // вернет lor
function returnStringSize(str, size){
	return str.slice(0, size);
}

let s_returnStringSize = (str, size) => str.slice(0, size);
//8. Доработай предыдущую функцию так, чтобы, если кол-во символо меньше второго параметра, функция возвращала "текст слишком коротки".

function returnStringSizeModernization(str, size){
	if(size < str.lengtj) { console.log('Количество символов строки мало для такого обрезания'); return;}
	return str.slice(0, size);
}

let s_returnStringSizeModernization = (str, size) => (size < str.length)? str.slice(0, size) : console.log('количество символов строки мало для такого обрезания');





