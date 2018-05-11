const conn = require('../../bin/dbConnection');

const persons = [
    { id: 1, name: 'Mário', idade: '23' },
    { id: 2, name: 'Henirque', idade: '23' },
    { id: 3, name: 'Maurício', idade: '20' }
];

exports.personsGet = () => persons;