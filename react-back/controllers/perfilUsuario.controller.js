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
        fecha_nacimiento: req.body.fecha_nacimiento,
        estatura: req.body.estatura,
        peso: req.body.peso,
        imc: req.body.imc,
        categoria_peso: req.body.categoria_peso, 
        celular: req.body.celular,
        nombre_medico: req.body.nombre_medico,
        apellido_medico: req.body.apellido_medico,
        visibilidad: req.body.visibilidad,
        alerta: req.body.alerta 
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
    PerfilUsuario.findOne({mail: req.params.id}, function(err, perfilUsuario){
        res.json(perfilUsuario)
    })
}

exports.update = function(req,res){
    let perfilUsuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_nacimiento: req.body.fecha_nacimiento,
        estatura: req.body.estatura,
        peso: req.body.peso,
        imc: req.body.imc,
        categoria_peso: req.body.categoria_peso, 
        celular: req.body.celular,
        nombre_medico: req.body.nombre_medico,
        apellido_medico: req.body.apellido_medico,
        visibilidad: req.body.visibilidad,
        alerta: req.body.alerta 
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