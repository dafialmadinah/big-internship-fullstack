const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controllers");

router.post("/register", register);
router.post("/login", login);

router.get("/test", (req, res) => {
  res.json({ message: "auth route works" });
});


module.exports = router;
