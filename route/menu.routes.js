const express = require('express');
const router = express.Router();
const menu = require('../controller/menu.controller');

  // Retrieve all menus
router.get('/',menu.findAll );

 // Retrieve a single menu with menuId
router.get('/:menuId', menu.findOne);

// Create a new Menu
router.post('/', menu.create);

// Update a Note with menuId
router.put('/:menuId', menu.update);

// Delete a Note with menuId
router.delete('/:menuId', menu.delete);

module.exports = router;
// module.exports = (app) => {
//     const menus = require('../controller/menu.controller');

//     // Create a new Menu
//     app.post('/menus', menus.create);

//     // Retrieve all menus
//     app.get('/menus', menus.findAll);

//     // Retrieve a single menu with menuId
//     app.get('/menus/:menuId', menus.findOne);

//     // Update a Note with menuId
//     app.put('/menus/:menuId', menus.update);

//     // Delete a Note with menuId
//     app.delete('/menus/:menuId', menus.delete);
// }