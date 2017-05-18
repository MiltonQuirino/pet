var mongoose = require('mongoose');

exports.abreConexao = function() {
    console.log('abre conexao');
    mongoose.connect('mongodb://127.0.0.1:27017');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('we are connected!');
    });
}