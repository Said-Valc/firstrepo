let bs = {
	title: 'The bottle song',
	couplet: '99 бутылок пива на стене, 99 бутылок пива! Возьми одну, пусти по кругу, 98 бутылок пива на стене!',
	param: 99,
	song: function(){
		let str = '';
		for(let i = this.param; i >= 1; i--){
		str += ` <${i}> ${this.assistant(i, this.letters)} пива на стене
				 <${i}> ${this.assistant(i, this.letters)} пива! Возьми одну, пусти по кругу
				 <${i -1}> ${this.assistant(i-1, this.letters)} пива на стене!\n`;
		}
		console.log(str);
	},
	assistant: (number, titles) =>{
    	let cases = [2, 0, 1, 1, 1, 2];
    	return titles[(number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]];  
	},
	letters: ['Бутылка', 'Бутылки', 'Бутылок']
}
bs.param = 99;
bs.song();