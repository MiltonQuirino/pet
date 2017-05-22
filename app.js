var app = require('./config/express')();
var rotasProdutos = require('./app/routes/produtos')(app);
var rotasAnimal = require('./app/routes/animal')(app);
var cors = require('cors');
var bodyParser = require('body-parser');

var db = require('./config/db');
db.abreConexao();


// Add this line below
// app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.listen(3000, function () {
    console.log("servidor rodando");
});