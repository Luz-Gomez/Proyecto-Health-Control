const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const perfilUsuarioSchema = new Schema({
    mail:{type: String, required: true, max:70},
    nombre:{type: String, required: true, max:60},
    apellido:{type: String, required: true, max:60},
    fechaNacimiento:{type: Date, required: true},
    estatura:{type: Number, required: false},
    peso:{type: Number, required: false},
    celular:{type: String, required: false, max:50},
    nombreMedico:{type: String, required: false, max:60},
    apellidoMedico:{type: String, required: false, max:60},
    visibilidad:{type: Boolean, required: false},
    alerta:{type: Boolean, required: false},
    imc:{type: Number, required: false},
    categoriaPeso:{type: String, required: false, max:20},
});

// Establecemos un campo virtual
perfilUsuarioSchema.virtual('fecha_iso')
  .set(function(fechas) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo fecha_iso de nuestro documento
    this.fechaNacimiento = new Date(fechas);
  })
  .get(function(){
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this.fechaNacimiento.toISOString().substring(0,10);
  });

module.exports = mongoose.model("perfilUsuario", perfilUsuarioSchema, "PerfilUsuario");
