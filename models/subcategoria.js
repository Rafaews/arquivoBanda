// Dependencies
var restful   = require('node-restful'),
	mongoose  = restful.mongoose;

// Schema
var subCategoriaSchema = new mongoose.Schema({
	 nome : String,
	 categoria : String
});

// Return model
module.exports = restful.model('subcategorias', subCategoriaSchema);