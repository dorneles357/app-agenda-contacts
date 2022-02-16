require('dotenv/config');
const http = require('http');
const app = require('./config/express')();
require('./config/database.js')(process.env.DB_DEV);


http.createServer(app).listen(app.get('port'), () => {
	console.log(`Express server escutando na porta ${app.get('port')}`);
});
