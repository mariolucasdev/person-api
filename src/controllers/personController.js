exports.post = (req, res, next) => {
  res.status(201).send('Resquisição recebida com sucesso!');
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Resquisição recebida com sucesso! id:${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! id:${id}`);
};
