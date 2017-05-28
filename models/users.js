const db = require('../config/database');

module.exports.isEmailRegistered = function(email, callback) {
	const query = 'SELECT COUNT(*) AS matches FROM users WHERE Email = ?';
	db.query(query, email, callback);
}

/**
	user = {
		Email: req.query.email,
		Password: req.query.password,
		FirstName: req.query.firstName,
		LastName: req.query.lastName
	}

**/

module.exports.create = function(user, callback) {
	const query = 'INSERT INTO users SET ?';
	db.query(query, user, callback);
}