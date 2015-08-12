// Dependencies
var restful  = require('node-restful'),
	mongoose  = restful.mongoose;

// Schema
var categoriaSchema = new mongoose.Schema({
	 nome : String
});

// Return model
module.exports = restful.model('categorias', categoriaSchema);