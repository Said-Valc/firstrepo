

let soldier = {
	name: 'Rembo',
	hp: 10,
	arsenal: {name: 'desert eagle', cnt: 30},
	inventory: 10,
	shooting: function(){
		if(this.arsenal.cnt !=0){
			this.arsenal.cnt--;
			console.log('Бах-бах');
			console.log(this.arsenal.cnt);
		}
		console.log('Перезаредись!');
		return true;
	},
	reloading: function(){
		if(this.inventory == 0){
			console.log('Не осталось боеприпасов.');
			return false;
		}
		this.arsenal.cnt = 30;
		this.inventory--;
		console.log('Перезарядка...');
	},
	wound:  function(){
		if(this.hp == 0){
			console.log('Вы мертвы!');
			return false;
		}
		this.hp--;
		console.log('Вас ранили!');
		return true;
	}
}