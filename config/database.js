
const mongoose = require('mongoose');

module.exports = (uri) =>{
	mongoose.connect(uri);

	mongoose.connection.on('connected', ()=>{
		console.log(`Connected!`);
	});
	mongoose.connection.on('disconnected', ()=>{
		console.log(`Disconnected!`);
	});
	mongoose.connection.on('error', (erro)=>{
		console.log(`Erro:${erro}`);
	});

	//close connection
	process.on('SIGINT', ()=>{
		mongoose.connection.close(()=>{
			console.clear();
			console.log(`Disconnected application ...`);

			process.exit(0);
		});
	});

	mongoose.set('debug', true);
}

