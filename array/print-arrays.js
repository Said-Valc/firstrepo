const arr1 = []; //empty array

console.log(arr1[0]);

const arr2 = [1,2,3]; // number values in array

console.log(arr2[0] + arr2[1]); //сумма первого и второго элемента

const arr3 = ['string', 'string2', 'string3']; // string and number for 3 values in this array;

console.log(arr3[0] + arr3[1] + arr3[2]);

const arrNames = ['Мухаммед', 'Маснур', 'Ислам', 'Арутр', 'Халид']; //names in array;

console.log(`Первый элемент массива: ${arrNames.shift()}  Последний элемент массива:  ${arrNames.pop()}`);

const arrMoreValues = ['string', 2, true, null, undefined]; //разные типы в массиве

console.log(arrMoreValues[4], arr2.pop());

// напутал тут

for(let key in arrMoreValues){
	console.log(arrMoreValues[key]);
}

const arrEmptyArray = [[], [], []];

console.log(arrEmptyArray.length);

const arrInArray = [[2,3,4], [23,'23',4]];

console.log(arrInArray[0][0], arrInArray[1][2]);