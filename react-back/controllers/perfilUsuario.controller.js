const PerfilUsuario = require("../models/perfilUsuario.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let perfilUsuario = new PerfilUsuario({
        mail: req.body.mail,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        estatura: req.body.estatura,
        peso: req.body.peso,
        celular: req.body.celular,
        nombreMedico: req.body.nombreMedico,
        apellidoMedico: req.body.apellidoMedico,
        visibilidad: req.body.visibilidad,
        alerta: req.body.alerta,
        imc: req.body.imc,
        categoriaPeso: req.body.categoriaPeso
    })

    perfilUsuario.save(function(err){
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar perfil de usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Perfil de usuario guardado correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){
    PerfilUsuario.find(function(err, perfilUsuario){
        res.json(perfilUsuario)
    })
}

exports.findOne = function(req, res){
    PerfilUsuario.findOne({_id: req.params.id}, function(err, perfilUsuario){
        res.json(perfilUsuario)
    })
}

exports.update = function(req,res){
    let perfilUsuario = {
        mail: req.body.mail,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        estatura: req.body.estatura,
        peso: req.body.peso,
        celular: req.body.celular,
        nombreMedico: req.body.nombreMedico,
        apellidoMedico: req.body.apellidoMedico,
        visibilidad: req.body.visibilidad,
        alerta: req.body.alerta,
        imc: req.body.imc,
        categoriaPeso: req.body.categoriaPeso,
    }

    PerfilUsuario.findByIdAndUpdate(req.params.id, {$set: perfilUsuario}, function(err){
        if(err){
            console.err(err),
            response.exito = false,
            response.msg = "Error al actualizar datos de perfil"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Perfil de usuario ha sido actualizado"
        res.json(response)
    })
}

exports.remove = function(req, res){
    PerfilUsuario.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar perfil"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Perfil eliminado"
        res.json(response)
    })
}
