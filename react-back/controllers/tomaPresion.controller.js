const TomaPresion = require("../models/tomaPresion.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let tomaPresion = new TomaPresion({
        mail: req.body.mail,
        fecha: req.body.fecha,
        sistole: req.body.sistole,
        diastole: req.body.diastole,
        pulso: req.body.pulso,
        presion: req.body.presion
    })

    tomaPresion.save(function(err){
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar registro de presión"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Registro de presión guardado correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){
    TomaPresion.find(function(err, tomaPresion){
        res.json(tomaPresion)
    })
}

exports.findOne = function(req, res){
    TomaPresion.findOne({_id: req.params.id}, function(err, tomaPresion){
        res.json(tomaPresion)
    })
}

exports.update = function(req,res){
    let tomaPresion = {
        mail: req.body.mail,
        fecha: req.body.fecha,
        sistole: req.body.sistole,
        diastole: req.body.diastole,
        pulso: req.body.pulso,
        presion: req.body.presion,
    }

    TomaPresion.findByIdAndUpdate(req.params.id, {$set: tomaPresion}, function(err){
        if(err){
            console.err(err),
            response.exito = false,
            response.msg = "Error al actualizar registro de presión"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Registro de presión ha sido actualizado"
        res.json(response)
    })
}

exports.remove = function(req, res){
    TomaPresion.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar registro de presión"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Registro de presión eliminado"
        res.json(response)
    })
}
