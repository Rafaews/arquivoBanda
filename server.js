// Dependencies
var express    = require('express')
   ,mongoose   = require('mongoose')
   ,bodyParser = require('body-parser')
   ,path       = require('path');

// MongoDB
mongoose.connect('mongodb://localhost/arquivoBandaAPI');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'front')));

// CORS
app.all('/*', function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Content-Type,X-Requested-With');
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,HEAD,OPTIONS');
	next();
});

// Routes
app.use('/api', require('./routes/api'));

// Start Server
var port = Number(process.env.PORT || 3000)
app.listen(port);
console.log('API Banda de Música Rodando na porta '+port);