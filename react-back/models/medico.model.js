const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicosSchema = new Schema({
    mail:{type: String, required: true, max:70},
    nombre:{type: String, required: true, max:60},
    apellido:{type: String, required: true, max:60},
    celular:{type: String, required: true, max:40},
    institucion:{type: String, required: true, max:60},
    regInstitucion:{type: String, required: true, max:60},
    tarjetaProf:{type: String, required: true, max:60},
    acepta:{type: Boolean, required: false},
    alerta:{type: Boolean, required: false}
});

module.exports = mongoose.model("medicos", MedicosSchema);
