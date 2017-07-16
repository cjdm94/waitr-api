// Depdendencies
const bcrypt = require('bcrypt');
// Config
const db = require('../config/database');

/**

	Search the db for a userId, and returns the user if a match is found

**/
module.exports.getUserById = function(userId, callback) {
	const query = 'SELECT * FROM users WHERE UserId = ?';
	db.query(query, userId, callback);
}

/**

	(ADMIN-ONLY): Returns a list of all registered email addresses

**/
module.exports.getAllUsers = function(callback) {
	const query = 'SELECT email FROM users';
	db.query(query, callback);
}


/**
	user = {
		Email: req.query.email,
		Password: req.query.password,
		FirstName: req.query.firstName,
		LastName: req.query.lastName
	}

**/
module.exports.createNewUser = function(user, callback) {
	const query = 'INSERT INTO users SET ?';
	db.query(query, user, callback);
}

/**

	Checks if a user exists by running an email address against the db. Returns the match if found

**/
module.exports.doesUserExist = function(email, callback) {
	const query = 'SELECT * FROM Users WHERE email = ?';
	db.query(query, email, callback);
}

/**

	Checks if a user exists by running an email address against the db. Returns true if a match is found

**/
module.exports.isEmailRegistered = function(email, callback) {
	const query = 'SELECT COUNT(*) AS matches FROM users WHERE Email = ?';
	db.query(query, email, callback);
}

/**

	Hashes the user's password upon signup

**/
module.exports.hashPassword = function(password, callback) {
	bcrypt.genSalt(11, (err, salt) => {
		bcrypt.hash(password, salt, callback);
	});
}

/**

	Compares the user's login password with their hashed password that is stored in the db

**/
module.exports.checkPassword = function(plainTextPassword, hash, callback) {
	bcrypt.compare(plainTextPassword, hash, callback);
}