// Dependencies
var express = require('express')
   ,router  = express.Router();

// Models
var Obra         = require('../models/obra')
   ,Categoria    = require('../models/categoria')
   ,SubCategoria = require('../models/subcategoria')
   ,Instrumento  = require('../models/instrumento');

// Routes
Obra.methods(['get','put','post','delete']);
Obra.register(router, '/obras');

Categoria.methods(['get','put','post','delete']);
Categoria.register(router, '/categorias');

SubCategoria.methods(['get','put','post','delete']);
SubCategoria.register(router, '/subcategorias');

Instrumento.methods(['get','put','post','delete']);
Instrumento.register(router, '/instrumentos');


// Reurn router
module.exports = router;