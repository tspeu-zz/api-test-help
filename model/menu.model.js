const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    numberMenu: String,
    titleMenu: String,
    subtitleMenu: String,
    numberSubMenu: String,
    hasSubMenu:Boolean,
    titleBody: String,
    subTitleBody: String,
    body: [], 
    //en mongo FIXME:
    // body: String,
    // bodyLista: String,
    bodyLista: [], 
    hasBodyLista: Boolean,
    imagenLista: String,
    image: String,
    imageSubtitle: {},
    isEdit: Boolean

    }, 
{
    timestamps: true
});

// module.exports = mongoose.model('Menu', MenuSchema);
const Menu =mongoose.model('Menu', MenuSchema);
module.exports = Menu; 