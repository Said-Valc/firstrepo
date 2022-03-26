//создай массив с десятью элементами числового типа.

//Создай переменную accumulatorOdd и собери в ней нечетные числа массива.

let arr = [1,2,3,4,5,6,7,8,9,10];
let accumulatorOdd = [];
for(let i in arr){
	if(!arr[i] % 2 == 0) accumulatorOdd.push(arr[i]);
}