const express = require('express');
const router = express.Router();
const data = require('../controller/menu.controller');

// Create a new Data
router.post('/', data.create);

  // Retrieve all menus
router.get('/',data.findAll );

  // Retrieve a single menu with menuId
 router.get('/:menuId', data.findOne);
 
//  TODO:
 // Update a Note with menuId
//  router.put('/:menuId', data.update);
 
//  // Delete a Note with menuId
//  router.delete('/:menuId', data.delete);
 
 module.exports = router;