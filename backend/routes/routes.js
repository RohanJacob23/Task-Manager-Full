const express = require("express");
const router = express.Router();
const {
  getTask,
  createTask,
  deleteTask,
  updateTask,
  getSingleTask,
} = require("../controllers/controllers");

router.get("/", getTask);

router.get("/:id", getSingleTask);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
