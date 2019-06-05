
var express = require('express')

var router = express.Router()
var menu = require('./menu.routes')
var data = require('./data.routes')


router.use('/menu', menu);
router.use('/ayuda',data);


module.exports = router;