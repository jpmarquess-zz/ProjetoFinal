var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

// Database connection
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

// Gets users
exports.index = function (request, response) {
  query = "SELECT * FROM users";

  connection.query(query, function (error, results, fields) {
    if (!error)
      response.send(results);
    else
      console.log('query failed');
  })
}

// Gets posts
exports.posts = function (request, response) {
  query = "SELECT * FROM posts";

  connection.query(query, function (error, results, fields) {
    if (!error)
      response.send(results);
    else
      console.log('query failed');
  })
}

// Gets post by id
exports.show = function (request, response) {
  id = request.params.id;
  query = "SELECT * FROM posts WHERE post_id = ?";

  connection.query(query, id, function (error, results, fields) {
    if (!error)
      response.send(results);
    else
      console.log('query failed');
  })
}

// Gets comments
exports.comment = function (request, response) {
  id = request.params.id;

  query = "SELECT comments.comment_id, users.username, comments.body FROM ((comments INNER JOIN users ON comments.user_id = users.user_id) INNER JOIN posts ON comments.post_id = posts.post_id) WHERE posts.post_id = ?";

  connection.query(query, id, function (error, results, fields) {
    if (!error)
      response.send(results);
    else
      console.log('query failed');
  })
}

// Add comments
exports.comment_add = function (request, response) {
  id = request.params.id;
  body = request.body.body;

  query = "INSERT INTO comments(user_id, post_id, body) VALUES(22, ?, ?)";

  connection.query(query, [id, body], function (error, results, fields) {
    if (!error)
      response.send(results);
    else
      console.log('query failed');
  })
}

// Signup
exports.adduser = function (request, response) {
  username = request.body.username;
  password = request.body.password;

  query = "INSERT INTO users(username, password) VALUES(?, ?)";

  connection.query(query, [username, password], function (error, results, fields) {
    if (!error)
      response.send(results);
    else
      console.log('query failed');
  })
}

// Create post
exports.create = function (request, response) {
  title = request.body.title;
  body = request.body.body;

  query = "INSERT INTO posts(title, body) VALUES(?, ?)";

  connection.query(query, [title, body], function (error, results, fields) {
    if (!error)
      response.send(results);
    else
      console.log('query failed');
  })
}