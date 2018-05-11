const model = require('../models/booksModel');

exports.get = (req, res, next) => {
  res.status(200).send(model.getBooks());
};

exports.getAll = (req, res, next) => {
  res.status(200).send(model.getBooks());
};

exports.post = (req, res, next) => {};

exports.put = (req, res, next) => {};

exports.delete = (req, res, next) => {};
