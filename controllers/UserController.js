const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.get('/', (req, res, next) => {
	res.send('Users');
});

module.exports = router;
