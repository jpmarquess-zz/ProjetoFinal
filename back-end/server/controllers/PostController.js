var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'social'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected to database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Gets user
exports.index = function (request, response) {
  query = "SELECT * FROM users";

  connection.query(query, function (error, results, fields) {
    if (!error)
      response.send(results);
    else
      console.log('query failed');
  })
}

// Gets user by id
exports.show = function (request, response) {
  id = request.params.id;
  query = "SELECT * FROM users WHERE user_id = ?";

  connection.query(query, id, function (error, results, fields) {
    if (!error)
      response.send(results);
    else
      console.log('query failed');
  })
}