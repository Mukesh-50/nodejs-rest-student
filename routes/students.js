const express = require('express');
const studentController = require('../controllers/student.controller');

const router = express.Router();
router.post("/", studentController.save);
router.get("/", studentController.showAll);
router.get("/:id", studentController.showbyId);
router.put("/:id", studentController.update);
router.delete("/:id", studentController.destroy);
module.exports = router;