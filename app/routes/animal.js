var animal = require('../models/animal');


module.exports = function(app) {

    app.get('/animais', function(req, res) {

        var lista = animal.find({}, function(err, animais) {
            if (err) throw err;
            console.log(animais);
            res.setHeader('Content-Type', 'application/json');
            res.send(animais);
        });

    });

    app.get('/animais/cadastro', function(req, res) {

        saveList(mockAnimal());
        res.send('Banco Atualizado !');
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
            nome: 'Border Collie',
            descricao: 'Collie',
            porte: 'Medio',
            tipo: 'CAO',
        })
    ];
    return lista;
}

function saveList(objects) {

    var object = objects.pop();

    if (object) {
        object.save(function(err) {

            if (err) throw err;
            console.log('Object saved successfully : ' + object);
            saveList(objects);
        });
    }
}