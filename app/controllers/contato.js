const contatos = [
  { id: "1", nome: "Goku", email: "goku@gmail.com" },
  { id: "1", nome: "Hantaro", email: "hantaro@gmail.com" },
];
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

  return controller;
};
