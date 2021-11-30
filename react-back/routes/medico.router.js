const express = require("express");
const router = express.Router();
const medicoController = require("../controllers/medico.controller");

router.post("/", medicoController.create)
router.get("/", medicoController.find)
router.get("/:id", medicoController.findOne)
router.put("/:id", medicoController.update)
router.delete("/:id", medicoController.remove)

module.exports = router
