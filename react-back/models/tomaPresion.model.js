const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TomaPresionSchema = new Schema({
    mail:{type: String, required: true, max:70},
    fecha:{type: Date, required: true},
    sistole:{type: Number, required: true},
    diastole:{type: Number, required: true},
    pulso:{type: Number, required: true},
    presion:{type: String, required: false, max:60}
});

// Establecemos un campo virtual
TomaPresionSchema.virtual('fecha_iso')
  .set(function(fechas) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo fecha_iso de nuestro documento
    this.fecha = new Date(fechas);
  })
  .get(function(){
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this.fecha.toISOString().substring(0,10);
  });

module.exports = mongoose.model("tomaPresion", TomaPresionSchema, "TomaPresion");
