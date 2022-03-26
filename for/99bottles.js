


function song(param){
	let str = '';
	for(let i = param; i >= 1; i--){
		let letter = bottles(i, ['Бутылка', 'Бутылки', 'Бутылок'])
			str += ` <${i}> ${letter} пива на стене
				<${i}> ${letter} пива!
				Возьми одну, пусти по кругу
				<${i -1}> ${bottles(i -1, ['Бутылка', 'Бутылки', 'Бутылок'])} пива на стене!\n`;
	}
	return str;
}

function bottles(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}


console.log(bottles(5, ['Бутылка', 'Бутылки', 'Бутылок']));

console.log(song(99));