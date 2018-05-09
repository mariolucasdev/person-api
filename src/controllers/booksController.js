const books = [
  {
    id: 'kansdjkn23njknwdj',
    title: 'books',
    author: 'Albert Einstain',
    pages: 148,
    description: 'descriptions books text'
  },
  {
    id: 1,
    title: 'books',
    author: 'Albert Einstain',
    pages: 148,
    description: 'descriptions books text'
  },
  {
    id: 2,
    title: 'books',
    author: 'Albert Einstain',
    pages: 148,
    description: 'descriptions books text'
  },
  {
    id: 3,
    title: 'books',
    author: 'Albert Einstain',
    pages: 148,
    description: 'descriptions books text'
  }
];

exports.get = (req, res, next) => {
  res.status(200).send(books);
};

exports.getAll = (req, res, next) => {
  res.status(200).send(books);
};

exports.post = (req, res, next) => {};

exports.put = (req, res, next) => {};

exports.delete = (req, res, next) => {};
