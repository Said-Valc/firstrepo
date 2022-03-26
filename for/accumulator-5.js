//В файле accumulator-5.js создай массив с десятью элементами числового типа.

//Создай переменную accumulatorEven и собери в ней четные числа массива.

let arr = [1,2,3,4,5,6,7,8,9,10,100,500,23,44];
let accumulatorEven = [];
for(let i in arr){
	if(arr[i] % 2 == 0) accumulatorEven = arr[i];
}