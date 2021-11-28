const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    usuario:{type: String, required: true, max:100},
    tipo:{type: String, required: true, max:6},
    pass:{type: String, required: true, max:128},
});

module.exports = mongoose.model("usuarios", UsuarioSchema, "usuarios");
