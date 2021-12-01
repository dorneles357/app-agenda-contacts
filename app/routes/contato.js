module.exports = (app) => {
  const controller = app.controllers.contato;
  app.get("/contatos", controller.listaContatos);
  //app.post("/contatos", controller.salvaContato);

  app.get("/contatos/:id", controller.obtemContato);
  app.delete("/contatos/:id", controller.removeContato);
};
