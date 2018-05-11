const conn = require('../../bin/dbConnection');

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

  exports.getBooks = () => books;