const express = require('express');

const server = express();

server.use(express.json());

//Query params = ?test=1
//Route params = /test/1
//Request body = {"name": "Yan", "email": "yanfornimedeiros@gmail.com"}

const users = ['Yan', 'Lais', 'Gabriela']

//Create
server.post('/users', (req, res) => {
  const {name} = req.body;

  users.push(name);
  return res.json(users);
})

//Read
server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', (req, res) => {
  const {index} = req.params;

  return res.json(users[index]);
})

//Update
server.put('/users/:index', (req, res) => {
  const {index} = req.params;
  const {name} = req.body;

  users[index] = name;

  return res.json(users);
})

//Delete
server.delete('/users/:index', (req, res) => {
  const {index} = req.params;

  users.splice(index, 1);

  return res.json(users);
})

server.listen(3000);