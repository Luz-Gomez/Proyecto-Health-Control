const PerilMedico = require("../models/perfilMedico.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let perfilMedico = new PerfilMedico({
        mail: req.body.mail,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        celular: req.body.celular,
        institucion: req.body.institucion,
        regInstitucion: req.body.regInstitucion,
        tarjetaProf: req.body.tarjetaProf,
        acepta: req.body.acepta, 
        alerta: req.body.alerta
    })

    perfilUsuario.save(function(err){
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar perfil de medico"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Perfil de medico guardado correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){
    PerfilMedico.find(function(err, perfilMedico){
        res.json(perfilMedico)
    })
}

exports.findOne = function(req, res){
    PerfilMedico.findOne({mail: req.params.id}, function(err, perfilMedico){
        res.json(perfilMedico)
    })
}

exports.update = function(req,res){
    let perfilMedico = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        celular: req.body.celular,
        institucion: req.body.institucion,
        regInstitucion: req.body.regInstitucion,
        tarjetaProf: req.body.tarjetaProf,
        acepta: req.body.acepta, 
        alerta: req.body.alerta
    }

    PerfilMedico.findByIdAndUpdate(req.params.id, {$set: perfilMedico}, function(err){
        if(err){
            console.err(err),
            response.exito = false,
            response.msg = "Error al actualizar datos de perfil"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Perfil de medico ha sido actualizado"
        res.json(response)
    })
}

exports.remove = function(req, res){
    PerfilMedico.findByIdAndRemove({_id: req.params.id}, function(err){
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
