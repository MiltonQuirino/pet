exports.cadastrar = function() {
        object.save(function (err) {

            if (err) throw err;
            console.log('Object saved successfully : ' + object);
        });
};