var animal = require('../models/animal');
var proposta = require('../models/proposta');
var bodyParser = require('body-parser');

var url = require('url');


module.exports = function (app) {

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());

    app.get('/animais', function (req, res) {

        console.log(req.body);
        var lista = animal.find({}, function (err, animais) {
            if (err) throw err;
            console.log(animais);
            res.setHeader('Content-Type', 'application/json');
            res.send(animais);
        });

    });

    app.post('/animais/cadastro', function (req, res) {

        console.log(req.body);

        var prop = new proposta({
            celular: req.body.celular,
            cpf: req.body.cpf,
            dataNascimento: req.body.dataNascimento,
            email: req.body.email,
            nomePet: req.body.nomePet,
            nomeUsuario: req.body.nomeUsuario,
            raca: req.body.raca,
            sobrenome: req.body.sobrenome
        });

        prop.save(function (err) {

            if (err) throw err;
            console.log('Object saved successfully : ' + prop);

        });

        res.send({ uuid: prop._id });
    });

    app.get('/animais/obter', function (req, res) {

        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;

        proposta.find({ _id: query.uuid }, function (err, prop) {
            
            if (err){
                return console.error(err);
            } 
            
            res.send(prop);
            console.log(prop);
        });

       
    });

    app.get('/animais/updateBanco', function (req, res) {

        saveList(mockAnimal());
        res.send('Banco Atualizado !');
    });

    app.get('/animais/obterGato', function (req, res) {
        ListaAnimal('GATO', res)
    });

    app.get('/animais/obterCao', function (req, res) {
        ListaAnimal('CAO', res)
    });

}

function ListaAnimal(tipo, res) {

    animal.find({ tipo: tipo }, function (err, animais) {
        if (err) throw err;
        console.log(animais);
        res.setHeader('Content-Type', 'application/json');
        res.send(animais);
    });
}

function mockAnimal() {

    var lista = [

        new animal({
            raca: 'Pastor Alemao',
            porte: 'Grande',
            descricao: 'Pastor',
            tipo: 'CAO',
        }),
        new animal({
            raca: 'Maltes',
            porte: 'Medio',
            descricao: 'Maltes',
            tipo: 'CAO',
        }),
        new animal({
            raca: 'Border Collie',
            descricao: 'Collie',
            porte: 'Medio',
            tipo: 'CAO',
        }),
        new animal({
            raca: 'Persa',
            descricao: 'persa',
            porte: 'Medio',
            tipo: 'GATO',
        }),
        new animal({
            raca: 'Siames',
            descricao: 'siames',
            porte: 'Pequeno',
            tipo: 'GATO',
        })
    ];
    return lista;
}

function saveList(objects) {

    var object = objects.pop();

    if (object) {
        object.save(function (err) {

            if (err) throw err;
            console.log('Object saved successfully : ' + object);
            saveList(objects);
        });
    }
}