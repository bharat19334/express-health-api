const express = require("express");

const app = express();

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running"
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
module.exports = app;
