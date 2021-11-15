module.exports = (app) => {
	const controller = app.controllers.contatos;
	app.get('/contatos', controller.listaContatos);
	app.get('/contatos/:id', controller.obtemContato);
};
