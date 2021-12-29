const http = require('http');
const app = require('./config/express')();
require('./config/database.js')('mongodb://127.0.0.1/server');


http.createServer(app).listen(app.get('port'), () => {
	console.log(`Express server escutando na porta ${app.get('port')}`);
});
