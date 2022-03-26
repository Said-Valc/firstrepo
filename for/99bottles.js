


function song(param){
	let str = ` <${param}> бутылок пива на стене
				<${param}> бутылок пива!
				Возьми одну, пусти по кругу
				<${--param}> бутылок пива на стене!`;
	return str;
}

console.log(song(99));