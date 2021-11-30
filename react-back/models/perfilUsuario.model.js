const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const perfilUsuarioSchema = new Schema({
    mail:{type: String, required: true, max:70},
    nombre:{type: String, required: true, max:60},
    apellido:{type: String, required: true, max:60},
    fechaNacimiento:{type: Date, required: true},
    estatura:{type: Number, required: false},
    peso:{type: Number, required: false},
    celular:{type: Number, required: false},
    nombreMedico:{type: String, required: false, max:60},
    apellidoMedico:{type: String, required: false, max:60},
    visibilidad:{type: Boolean, required: false},
    alerta:{type: Boolean, required: false},
    imc:{type: Number, required: false},
    categoriaPeso:{type: String, required: false, max:20},
});

module.exports = mongoose.model("perfilUsuario", perfilUsuarioSchema, "PerfilUsuario");
