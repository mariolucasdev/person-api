const model = require('../models/booksModel');

exports.get = (req, res, next) => {
  let id = parseInt(req.params.id);
  res.status(200).send(model.get(id));
};

exports.getAll = (req, res, next) => {
  res.status(200).send(model.getBooks());
};

exports.post = (req, res, next) => {};

exports.put = (req, res, next) => {};

exports.delete = (req, res, next) => {};
