var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'sql10.freesqldatabase.com',
    user     : 'sql10292719',
    database :'sql10292719',
    password : 'fa7XIeagXz',
    port:3306
  });
  module.exports = connection;