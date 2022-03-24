

let func = (num) => {
	alert(num);
}


const arr = ['first value', 2, true, function(){ alert('w')}, func];


console.log(arr);
console.log(arr[4]('wwe'));

