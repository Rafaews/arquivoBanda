// Dependencies
var restful  = require('node-restful'),
	mongoose = restful.mongoose;

// Schema
var obraSchema = new mongoose.Schema({
	nome         : String
   ,autor        : String
   ,arranjista   : String
   ,dtcadastro   : { type: Date, default: Date.now }
   ,instrumentos : [String]
   ,categoria    : String
   ,subcategoria : String
   ,letra        : Boolean
   ,tonalidade   : String
   ,localizacao  : String
   ,digital		 : Boolean
   ,impresso	 : Boolean
   ,formato		 : String

});

// Return model
module.exports = restful.model('obras', obraSchema);