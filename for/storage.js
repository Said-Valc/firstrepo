//Напиши функцию, которая принимает массив из чисел и возвращает сумму его элементов.


let sum = (arr) => {
	let sum = 0;
	for(let i in arr){
		sum += arr[i];
	}
	return sum;
}


//Напиши функцию, которая принимает массив из чисел и возвращает сумму только положительных элементов.

let sum = (arr) => {
	let sum = 0;
	for(let i in arr){
		if(arr[i] > 0){
			sum += arr[i];
		}
	}
	return sum;
}

//Напиши функцию, которая принимает массив из названий языков программирования. Она должна возвращает названия тех элементов, длина которых больше трёх символов.


let languages = (arr) => {
	let lang = [];
	for(let i in arr){
		if(arr[i].length > 3){
			lang.push(arr[i]);
		}
	}
	return sum;
}

//Напиши функцию, которая принимает массив из имен. Функция должна вернуть новый массив с именами, которые начинаются либо на "а" либо на "у".

let languages = (names) => {
	let namesAandY = [];
	for(let i in names){
		if(names[i].charAt('A') || names[i].charAt('У')){
			namesAandY.push(arr[i]);
		}
	}
	return namesAandY;
}

//Допиши функцию deleteMessages так, чтобы она вовзращала новый массив, из которого удалены все объекты с ключами deleted равными true.

function deleteMessages(array) {
  // твой код
  let arr = [];
  for(let i in array){
  	if(array[i].deleted == true){
  		arr.push({text: arr[i].text, deleted: arr[i].deleted});
  	}
  }
  return arr;
}

const messages = [
 { text: 'hello', deleted: true },
 { text: 'bue', deleted: false },
 { text: 'js is a beauty', deleted: false },
 { text: 'pair programming', deleted: true },
 { text: 'this is my horse', deleted: false },
];

console.log(deleteMessages(messages))
