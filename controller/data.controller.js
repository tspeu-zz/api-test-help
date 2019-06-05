const Data = require('../model/data.model.js');

exports.create = (req, res) => { 

    if(!req.body) {
        return res.status(400).send({
            message: "Menu content can not be empty"
        });
    }

    const data = new Data({
        tituloMenuLat: req.body.tituloMenuLat,
        numeroMenuLateral: req.body.numeroMenuLateral,
        hasSubMenuLateral: req.body.hasSubMenuLateral || false,
        subMenulateral:  req.body.subMenulateral || [],
      
        tituloPrincipal: req.body.tituloPrincipal,
        subtituloPrincipal: req.body.subtituloPrincipal || "",
        hasImagenPrincipal: req.body.hasImagenPrincipal || false,
        ImagenPrincipalURL: req.body.imagenPrincipalURL || "",
        imagenPrincipal: req.body.imagenPrincipal,  
    
        parrafo: req.body.parrafo,
        isEdit: req.body.isEdit || false

    });

    // Save Menu in the database
    data.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the menu data."
        });
    });

};

// Retrieve all menu from the database.
exports.findAll = (req, res) => {
    Data.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving menu."
        });
    });
};

// TODO:
// Find a single menu with a menu
exports.findOne = (req, res) => {
    Data.findById(req.params.menuId)
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
