const express = require("express");
const router = express.Router();
const perfilUsuarioController = require("../controllers/perfilUsuario.controller");

router.post("/", perfilUsuarioController.create)
router.get("/", perfilUsuarioController.find)
router.get("/:id", perfilUsuarioController.findOne)
router.put("/:id", perfilUsuarioController.update)
router.delete("/:id", perfilUsuarioController.remove)

module.exports = router