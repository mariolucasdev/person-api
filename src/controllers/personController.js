const persons = [
  { id: 1, name: 'Mário', idade: '23' },
  { id: 2, name: 'Henirque', idade: '23' },
  { id: 3, name: 'Maurício', idade: '20' }
];

exports.get = (req, res, next) => {
  let id = parseInt(req.params.id);
  let person = persons.filter(persons => persons.id === id);
  res.status(200).send(person);
};

exports.getAll = (req, res, next) => {
  res.status(200).send(persons);
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
