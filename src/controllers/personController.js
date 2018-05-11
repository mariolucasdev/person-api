const model = require('../models/personModel');

exports.get = (req, res, next) => {
  let id = parseInt(req.params.id);
  let person = model.personsGet().filter(p => p.id === id);
  res.status(200).send(person);
};

exports.getAll = (req, res, next) => {
  res.status(200).send(model.personsGet());
};

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
