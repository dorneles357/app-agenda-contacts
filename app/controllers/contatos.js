var contatos = [];
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
    });
  return controller;
};
