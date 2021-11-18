const express = require("express");
const router = express.Router();
const tomaPresionController = require("../controllers/tomaPresion.controller");

router.post("/", tomaPresionController.create)
router.get("/", tomaPresionController.find)
router.get("/:id", tomaPresionController.findOne)
router.put("/:id", tomaPresionController.update)
router.delete("/:id", tomaPresionController.remove)

module.exports = router
