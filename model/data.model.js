const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    tituloMenuLat: String,
    numeroMenuLateral: Number,
    hasSubMenuLateral: Boolean,
    subMenulateral: [{
        tituloSubMenuLateral: String,
        numeroSubMenuLateral: Number
      }],

    tituloPrincipal: String,
    subtituloPrincipal: String,
    hasImagenPrincipal: Boolean,
    ImagenPrincipalURL: String,
    imagenPrincipal: {data: Buffer, contentType: String},  

    parrafo: [
        {
          tituloParr: String,
          hasImagenParr:{ Boolean , default: false},
          imagenParrURL: String,
          imagenParr: { data: Buffer, contentType: String},
          hasListaParr: boolean,
          // TEXTO PRINCIPAL LISTA PÁRRAFO
          listaParr: [
            {
              titulolistaParr: String,
              hasImagenlistaParr: { Boolean , default: false},
              imagenlistaParrURL: String,
              imagenlistaParr: { data: any, contentType: String},
              hasSubListaParr: boolean,
              // TEXTO PRINCIPAL SUBLISTA PÁRRAFO
              SubListaParr: [{
                tituloSubListaParr:  String,
                hasImagenSubListaParr: { Boolean , default: false},
                imagenSubListaParrURL:  String,
                imagenSubListaParr:  {data: Buffer, contentType: String},
              }]
            }]
        }],
    isEdit: { Boolean , default: false}


    },
    {
        timestamps: true
    });

const Data =mongoose.model('Data', DataSchema);
module.exports = Data; 