
var mysql = require('mysql');

var dbConnection = mysql.createConnection({
    host:'localhost',
    user:'tweeter',
    password:'tweeter@123',
    database:'tweeter'
});

exports.ping  = function(req, res) {
    res.send('SUCCESS');
};

exports.getUser  = function(req, res) {
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = "SELECT * FROM user WHERE lastName = ?";
        var values = [[ req.params.lastName ]];
        dbConnection.query(sql,[values], function (error, result) {
          if (error){
            return res.status(500).json(error);
          };
          console.log("Number of records inserted: " + result.affectedRows);
          return res.status(200).json(result);
        });
    });
};

exports.createUser  = function(req, res) {
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO user (firstName, lastName, age, sex, email) VALUES ?";
        var values = [[ req.body.firstName, req.body.lastName, req.body.age, req.body.sex, req.body.email]];
        dbConnection.query(sql,[values], function (error, result) {
          if (error){
            return res.status(500).json(error);
          };
          console.log("Number of records inserted: " + result.affectedRows);
          return res.status(200).json();
        });
    });
};

exports.postMessage  = function(req, res) {
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO messages (userId, content) VALUES ?";
        var values = [[ req.body.userId, req.body.content]];
        dbConnection.query(sql,[values], function (error, result) {
          if (error){
            return res.status(500).json(error);
          };
          console.log("Number of records inserted: " + result.affectedRows);
          return res.status(200).json();
        });
    });
};

exports.getMessages  = function(req, res) {
    dbConnection.connect(function(err) {
        if (err) throw err;
        var sql = "SELECT * from messages Where userId = " + mysql.escape(req.params.userId);
        dbConnection.query(sql, function (error, result, fields) {
          if (error){
            return res.status(500).json(error);
          };
          console.log("Number of records retrieved : " + result);
          return res.status(200).json(result);
        });
    });
};