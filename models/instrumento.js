// Dependencies
var restful  = require('node-restful'),
	mongoose  = restful.mongoose;

// Schema
var instrumentoSchema = new mongoose.Schema({
	 nome : String
});

// Return model
module.exports = restful.model('instrumentos', instrumentoSchema);