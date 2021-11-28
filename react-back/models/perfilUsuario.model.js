const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const perfilUsuarioSchema = new Schema({
    mail:{type: String, required: true, max:70},
    nombre:{type: String, required: true, max:60},
    apellido:{type: String, required: true, max:60},
    fecha_nacimiento:{type: Date, required: true},
    estatura:{type: Number, required: true},
    peso:{type: Number, required: true},
    imc:{type: Number, required: false},
    categoria_peso:{type: String, required: false, max:20},
    celular:{type: Number, required: false},
    nombre_medico:{type: String, required: false, max:60},
    apellido_medico:{type: String, required: false, max:60},
    visibilidad:{type: Boolean, required: false},
    alerta:{type: Boolean, required: false}
});

module.exports = mongoose.model("perfilUsuario", perfilUsuarioSchema, "PerfilUsuario");
