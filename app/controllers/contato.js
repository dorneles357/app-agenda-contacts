const contatos = [
  { _id: "1", nome: "Goku", email: "goku@gmail.com" },
  { _id: "2", nome: "Hantaro", email: "hantaro@gmail.com" },
];

let ID_CONTATO_INC = 3;

module.exports = () => {
  const controller = {};
  (controller.listaContatos = (req, res) => {
    res.json(contatos);
  }),
    (controller.obtemContato = (req, res) => {
      var idContato = req.params.id;
      var contato = contatos.filter((contato) => {
        return contato.id == idContato;
      })[0];

      contato
        ? res.json(contato)
        : res.status(404).send("Contato não encontrado");
    }),
    (controller.removeContato = function (req, res) {
      var idContato = req.params.id;

      contatos = contatos.filter(function (contato) {
        return contato._id != idContato;
      });
      res.send(204).end();
    });

    (controller.salvaContato = (req, res) =>{
      var contato = req.body;
      contato = contato._id ?
        atualiza(contato) :
        adiciona(contato);
      res.json(contato);
    });

    function adiciona(contatoNovo){
      contatoNovo._id = ++ID_CONTATO_INC;
      contatos.push(contatoNovo);
      return contatoNovo;
    }

    function atualiza(contatoAlterar){
      contatos = contatos.map((contato)=>{
        if(contato._id == contatoAlterar._id){
          contato = contatoAlterar;
        }
        return contato;
      });
      return contatoAlterar;
    }

  return controller;
};
