const express = require('express');
const { request } = require('https');

const server = express();

server.use(express.json());

//Query params = ?test=1
//Route params = /test/1
//Request body = {"name": "Yan", "email": "yanfornimedeiros@gmail.com"}

const users = ['Yan', 'Lais', 'Gabriela']

server.use((req, res, next) => {
  console.time('Request')
  console.log(`Methode: ${req.method}, URL: ${req.url}`);

  next();
  console.timeEnd('Request');
})

function checkUserExists(req, res, next) {
  if(!req.body.user) {
    return res.status(400).json({error: 'User name is required'});
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index]
  if (!user) {
    return res.status(400).json({error: 'User index is required'});
  }

  req.user = user

  return next();
}

//Create
server.post('/users', checkUserExists, (req, res) => {
  const {name} = req.body;

  users.push(name);
  return res.json(users);
})

//Read
server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', checkUserInArray, (req, res) => {
  const {index} = req.params;

  return res.json(req.user);
  // return res.json(users[index]);
})

//Update
server.put('/users/:index', checkUserExists, checkUserInArray, (req, res) => {
  const {index} = req.params;
  const {name} = req.body;

  users[index] = name;

  return res.json(users);
})

//Delete
server.delete('/users/:index', checkUserInArray, (req, res) => {
  const {index} = req.params;

  users.splice(index, 1);

  return res.send();
})

server.listen(3000);