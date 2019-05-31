const Menu = require('../model/menu.model.js');

// create new Menu
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Menu content can not be empty"
        });
    }

    // Create a Menu
    const menu = new Menu({
        numberMenu: req.body.numberMenu,
        titleMenu: req.body.titleMenu,
        subtitleMenu: req.body.subtitleMenu || "",
        numberSubMenu: req.body.numberSubMenu || "",
        hasSubMenu: req.body.hasSubMenu || false,
        titleBody: req.body.titleBody,
        subTitleBody: req.body.subTitleBody,
        body:  req.body.body , 
        bodyLista:  req.body.bodyLista || [], 
        hasBodyLista:  req.body.hasBodyLista || false,
        imagenLista: req.body.imagenLista || "",
        image: req.body.imagen || "",
        imageSubtitle: req.body.imageSubtitle || {}  ,
        isEdit: req.body.isEdit || false

    });

    // Save Menu in the database
    menu.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the menu."
        });
    });
};

// Retrieve all menu from the database.
exports.findAll = (req, res) => {
    Menu.find()
    .then(menu => {
        res.send(menu);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving menu."
        });
    });
};

// Find a single menu with a menu
exports.findOne = (req, res) => {
    Menu.findById(req.params.menuId)
    .then(menu => {
        if(!menu) {
            return res.status(404).send({
                message: "menu not found with id " + req.params.menuId
            });            
        }
        res.send(menu);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "menu not found with id " + req.params.menuId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving menu with id " + req.params.menuId
        });
    });
};

// Update a menu
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Menu content can not be empty"
        });
    }

    // Find and update product with the request body
    Menu.findByIdAndUpdate(req.params.menuId, {
        numberMenu: req.body.numberMenu,
        titleMenu: req.body.titleMenu,
        subtitleMenu: req.body.subtitleMenu || "",
        numberSubMenu: req.body.numberSubMenu || "",
        hasSubMenu: req.body.hasSubMenu || false,
        titleBody: req.body.titleBody,
        subTitleBody: req.body.subTitleBody,
        body:  req.body.body, 
        bodyLista:  req.body.bodyLista, 
        hasBodyLista:  req.body.hasBodyLista || false,
        imagenLista: req.body.imagenLista || "",
        image: req.body.imagen || "",
        imageSubtitle: req.body.imageSubtitle || "",
        isEdit: req.body.isEdit || false
    }, {new: true})
    .then(menu => {
        if(!menu) {
            return res.status(404).send({
                message: "Menu not found with id " + req.params.menuId
            });
        }
        res.send(menu);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Menu item not found with id " + req.params.menuId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating menu item with id " + req.params.menuId
        });
    });
};

// Delete a menu with the specified menuID in the request
exports.delete = (req, res) => {
    Menu.findByIdAndRemove(req.params.menuId)
    .then(menu => {
        if(!menu) {
            return res.status(404).send({
                message: "Menu item not found with id " + req.params.menuId
            });
        }
        res.send({message: "Menu  item deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "menu  item not found with id " + req.params.menuId
            });                
        }
        return res.status(500).send({
            message: "Could not delete menu item with id " + req.params.menuId
        });
    });
};