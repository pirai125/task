const express = require("express");
const router = express.Router();
const controls = require("../Controllers/controller");

router.get("/", controls.getAllItems);
router.get("/read/:id", controls.readItem);
router.post("/create", controls.createItem);
router.put("/edit/:id", controls.editItem);
router.delete("/delete/:id", controls.deleteItem);

module.exports = router;
