var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropostaSchema = new Schema({
    celular: String,
    cpf: String,
    dataNascimento: Date,
    email: String,
    nomePet: String,
    nomeUsuario: String,
    raca: String,
    sobrenome: String,
    created_at: Date,
    updated_at: Date
});

var proposta = mongoose.model('Proposta', PropostaSchema);

module.exports = proposta;