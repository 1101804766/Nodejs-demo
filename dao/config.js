var mysql = require('mysql');
var opts = {
	user: 'root',
	password: 'mysqladmin',
	database: 'sms',
	charset: 'utf8'
};

module.exports.conn = mysql.createConnection(opts);