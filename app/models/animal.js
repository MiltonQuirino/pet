var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = new Schema({
    raca: String,
    descricao: String,
    tipo: String,
    porte: String,
    created_at: Date,
    updated_at: Date
});

var animal = mongoose.model('Animal', AnimalSchema);

// on every save, add the date
AnimalSchema.pre('save_', function(next) {

    console.log('pre');
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});


module.exports = animal;