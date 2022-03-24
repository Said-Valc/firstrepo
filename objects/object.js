


let obj = {
	brand: 'iphone',
	model: '13 pro max',
	color: 'blue',
	memory: 1024,
	call: function(name){
		return 'я звоню - '+name;
	},
	batteryPower: '90%',
	power: false,
	isOn: () => (this.power) ? 'Телефон включен' : 'Телефон выключен',
	switch: () => (obj.power) ? obj.power = false : obj.power = true,
	sent: [
		{to: '+79999999999', 'time': '03:12', 'message': 'Сплю!'},
		{to: '+79232222222', 'time': '12:12', 'message': 'Обедаю!'},
	],
	inbox: [
		{from: '+7299332422', 'time': '20:11', 'message': 'Спишь?'},
		{from: '+7232099322', 'time': '21:23', 'message': 'Все еще спишь?'}
	],
	sentMessage: (from, time, message) => {
		let object = {
			from: from,
			time: time,
			message: message
		};
		obj.inbox.push(object);
	},
	clearInbox: () => {
		obj.inbox.splice(0, obj.inbox.length);
	},
	clearSent: () => {
		obj.sent.splice(0, obj.sent.length);
	}
};

