module.exports = (app) =>{
	const Contato = app.models.contatos;
	const controller ={};

	controller.listaContatos = (req, res)=>{
		const promise = Contato.find().exec()
			.then(
				(contatos) =>{
					res.json(contatos);
				},
				(erro) =>{
					console.log(erro);
					res.status(500).json(erro);
				}
			)
	};
	controller.obtemContato = (req, res)=>{
		const _id = req.params.id;
		Contato.findById(_id).exec()
			.then(
				(contato)=>{
					if(!contato) throw new Error(`contato não encontrado`);
					res.json(contato);
				},
				(erro) =>{
					console.log(erro);
				}
			)
	};
	controller.removeContato = (req, res)=>{
		const _id = req.params.id;
		Contato.remove({"_id": _id}).exec()
			.then(
				()=>{
					res.end();
				},
				(erro) =>{
					return console.log(erro);
				}
			);
	};
	controller.salvaContato = (req, res) =>{
		const _id = req.body._id;
		if(_id){
			Contato.findByIdAndUpdate(_id, req.body).exec()
				.then(
					(contato) => {
						res.json(contato);
					},
					(erro) => {
						console.log(erro);
						res.status(500).json(erro);
					}
				);
			
		}else{
			Contato.create(req.body)
				.then(
					(contato) =>{
						res.status(201).json(contato);
					},
					(erro)=>{
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	}

	return controller;
};
