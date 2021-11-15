var contatos = [
	{id: 1, nome:'Goku', email:'goku@mail.com'},
	{id: 2, nome:'naruto', email: 'naruto@gmail.com'},
	{id: 3, nome:'hantaro', email: 'hantaro@gmail.com'},
	{id: 4, nome:'saitama', email: 'saitama@gmail.com'}
]
module.exports = () =>{
	const controller = {};
	controller.listaContatos = (req, res) =>{
		res.json(contatos);
	},

		controller.obtemContato = (req, res) => {
			var idContato = req.params.id;
			var contato = contatos.filter((contato) => {
				return contato.id == idContato;
			})[0];

			contato ?
				res.json(contato) :
				res.status(404).send('Contato não encontrado');
		};
	return controller;
};
