
var express = require('express')

var router = express.Router()
var menus = require('./menu.routes')


router.use('/menu', menus);


module.exports = router;