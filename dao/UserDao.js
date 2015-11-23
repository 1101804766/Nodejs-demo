var config = require('./config');

var connection = config.conn;

module.exports.getUsers = function(callback) {
	connection.query('SELECT * FROM mls_148335_user WHERE 1=1', function(err, rows, fields) {
		if (!err) {
			callback(rows);
		} else {
			console.log("Error: " + err);
		}
	});
};

module.exports.deleteById = function(id, callback) {
	connection.query('DELETE FROM mls_148335_user WHERE id=?', [id], function(err, result) {
		if (!err) {
			callback(result);
		} else {
			console.log('Error: ' + err);
		}
	});
};

module.exports.findById = function(id, callback) {
	connection.query('SELECT * FROM mls_148335_user WHERE id=?', [id], function(err, rows, fields) {
		if (!err) {
			callback(rows[0]);
		} else {
			console.log('Error: ' + err);
		}
	});
};

module.exports.updateUser = function(id, params, callback) {
	connection.query('UPDATE mls_148335_user SET ? WHERE id=?', [params, id], function(err, result) {
		if (!err) {
			callback(result);
		} else {
			console.log('Error: ' + err);
		}
	});
};

module.exports.addUser = function(params, callback) {
	connection.query('INSERT INTO mls_148335_user SET ?', params, function(err, result) {
		if (!err) {
			callback(result);
		} else {
			console.log('Error: ' + err);
		}
	});
};