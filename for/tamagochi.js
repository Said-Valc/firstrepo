

let tamagochi = {
	name: 'Супян',
	food: 1,
	energy: 1,
	mood: 1,
	getStatus: function(){
		let str = `Имя: ${this.name}, Еда: ${(this.food < 3) ? 'я голоден('+this.food+')': 'я не голоден'}, Энергия: ${(this.energy < 3) ? 'я хочу спать('+this.food+')': 'я не хочу спать('+this.food+')'}, Настроение: ${(this.mood < 3)? 'мне скучно('+this.mood+')':' мне весело('+this.mood+')'}`;
		if((this.food == 0) || (this.energy == 0) || (this.mood == 0)){
			str = `[${this.name}]: умер`;
		}
		console.log(str);
	},
	setName: function(name){
		this.name = name;
	},
	eat: function(){
		if(this.food < 5) this.food++;
		this.mood--;
	},
	sleep: function(){
		this.food--;
		if(this.energy < 5) this.energy++;
	},
	play: function(){
		this.energy--;
		if(this.mood < 5) this.mood++;
	}
};
tamagochi.setName('davincci');
tamagochi.play();
tamagochi.eat();
tamagochi.sleep();
tamagochi.eat();
tamagochi.getStatus();