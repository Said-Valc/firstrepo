


function song(param){
	let str = '';
	for(let i = param; i >= 1; i--){
			str += ` <${i}> бутылок пива на стене
				<${i}> бутылок пива!
				Возьми одну, пусти по кругу
				<${i -1}> бутылок пива на стене!\n`;
	}
	return str;
}

console.log(song(99));