// Dependencies
// Config
const db = require('../config/database');

/**
	Get an entire menu by ID; includes all categories and items
**/
module.exports.getMenuById = function(menuId, callback) {
	const query = 'SELECT items.itemId, items.name, items.price, items.description, items.categoryId, ' +
				  'categories.name AS categoryName, categories.description AS categoryDescription, ' + 
				  'menus.name AS menuName ' +
				  'FROM items ' +
				  'JOIN categories on categories.categoryId = items.categoryId ' +
				  'JOIN menus on menus.menuId = categories.menuId ' +
				  'WHERE categories.menuId = ? ' +
				  'ORDER BY items.categoryId AND items.date';
	db.query(query, menuId, callback);
}

/**
	Get the userId of the menu owner by passing the menuId
**/
module.exports.getMenuOwnerId = function(menuId, callback){
	const query = 'SELECT restaurants.ownerId FROM restaurants ' +
				  'JOIN menus on menus.restaurantId = restaurants.restaurantId ' +
				  'WHERE menus.menuId = ?';
	db.query(query, menuId, callback);
}

/**
	Create new menu, assigned to a restaurant
**/
module.exports.createNewMenu = function(restaurantId, menu, callback) {
	// First add the restaurantId (from the route) to the menu object (sent in the body)
	menu.restaurantId = restaurantId;
	const query = 'INSERT INTO menus SET ?';
	db.query(query, menu, callback);
}