const express = require("express");
const router = express.Router();
const medicosController = require("../controllers/medico.controller");

router.post("/", medicosController.create)
router.get("/", medicosController.find)
router.get("/:id", medicosController.findOne)
router.put("/:id", medicosController.update)
router.delete("/:id", medicosController.remove)

module.exports = router
