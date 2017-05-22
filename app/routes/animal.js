var animal = require('../models/animal');
var bodyParser = require('body-parser');

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

        res.send('Cadastro !');
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