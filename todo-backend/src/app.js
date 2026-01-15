const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const todoRoutes = require("./routes/todo.routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes )

app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;
