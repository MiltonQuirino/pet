var app = require('./config/express')();
var rotasProdutos = require('./app/routes/produtos')(app);
var rotasAnimal = require('./app/routes/animal')(app);
var cors = require('cors');


var db = require('./config/db');
db.abreConexao();

app.use(cors());

app.listen(3000, function () {
    console.log("servidor rodando");
});