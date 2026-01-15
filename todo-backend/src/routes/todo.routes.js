const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  getTodos,
  createTodo,
  deleteTodo,
  toggleTodo,
} = require("../controllers/todo.controller");

router.use(auth);

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/toggle", toggleTodo);

module.exports = router;
