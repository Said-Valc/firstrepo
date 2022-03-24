
//Задача 3.1
//Создай функцию с именем getName, которая принимает один параметр. В этот параметр будет передаваться объект.
//Верни из функции ключ name этого объекта.

function getName(obj){
	return obj.name;
}

//Задача 3.2
//Создай функцию с именем getNames, которая принимает один параметр. В этот параметр будет передаваться объект.
//Верни из функции ключ массив, который содержит два элемента:

function getName(obj){
	return [obj.name, obj.lastname];
}

function concatNames(obj, lastname){
	return `${lastname} : ${obj}`;
}

//Задача 3.4
//Напиши функцию correctName, которая принимает один параметр (это будет объект).
//Если в принятом объекте ключ fathername имеет значение undefined, то верни только ключ firstname.
//В ином случае верни строку, которая содержит конкатенацию следующих ключей fistname + lastname + fathername

function correctName(obj){
	if(typeof obj.fathername == 'undefined'){
		return obj.firstname;
	}else {
		return obj.firstname + lastname + fathername;
	}
}