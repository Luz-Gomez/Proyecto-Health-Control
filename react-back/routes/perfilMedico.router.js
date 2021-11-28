const express = require("express");
const router = express.Router();
const perfilMedicoController = require("../controllers/perfilMedico.controller");

router.post("/", perfilMedicoController.create)
router.get("/", perfilMedicoController.find)
router.get("/:id", perfilMedicoController.findOne)
router.put("/:id", perfilMedicoController.update)
router.delete("/:id", perfilMedicoController.remove)

module.exports = router
